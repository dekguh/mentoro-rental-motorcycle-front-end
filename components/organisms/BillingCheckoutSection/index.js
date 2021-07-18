import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import DetailHead from '../detail/DetailHead'
import Alert from '../../atomics/Alert'
import { useRouter } from 'next/router'
import Api, { apiCheckMotorId } from '../../utils/Api'
import ListBookingDate from '../../molecules/order/ListBookingDate'
import FormTextarea from '../../molecules/form/FormTextarea'
import Button from '../../atomics/form/Button'
import { JournalPlus } from 'react-bootstrap-icons'
import { discountPrice, totalPriceByPriceRent } from '../../utils/handle/booking'
import { parseCookies } from 'nookies'

const BillingCheckoutSection = ({ billingData, bookingMotorId, bookingStartDate, bookingEndDate, bookingTotalDay }) => {
    const Router = useRouter()
    const [isValid, setIsValid] = useState(false)
    const [dataMotor, setDataMotor] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [dataPayment, setDataPayment] = useState({
        totalPay: '',
        pricePerHour: null,
        note: ''
    })
    const [errorMessage, setErrorMessage] = useState(null)

    // cookies
    const Cookies = parseCookies()
    const dataLogged = Cookies.dataLogged ? JSON.parse(Cookies.dataLogged) : ''

    useEffect(() => {
        const checkValidId = async () => {
            const checkId = await apiCheckMotorId(bookingMotorId)
            if(!checkId.valid) return Router.push('/')
            setDataMotor(checkId.data)
            setIsValid(true)
        }

        if(!bookingMotorId) return Router.push('/')
        checkValidId()
    }, [])

    useEffect(() => {
        const getPrice = dataMotor && totalPriceByPriceRent(dataMotor?.rent_price?.priceList, bookingTotalDay)
        if(getPrice?.pricePerHour) {
            const countPrice = getPrice.pricePerHour * (bookingTotalDay * 24)
            const totalPrice = getPrice.discount > 0
            ? discountPrice(countPrice, getPrice.discount)
            : countPrice

            setDataPayment({
                ...dataPayment,
                totalPay: Math.ceil(totalPrice),
                pricePerHour: getPrice.pricePerHour
            })
        }
    }, [dataMotor])

    const handleNote = e => {
        setDataPayment({
            ...dataPayment,
            note: e.target.value
        })
    }

    const handleMakeOrder = e => {
        if(!bookingStartDate || !bookingEndDate) return setErrorMessage('start date & end date must filled')
        setIsLoading(true)

        const apiMakeOrder = async () => {
            try {
                const response = await Api.post('orders', {
                    email: dataLogged.email,
                    note: dataPayment.note,
                    status: "wait_payment",
                    paymentMethod: null,
                    motor: dataMotor.id,
                    totalDay: bookingTotalDay,
                    payPerHour: dataPayment.pricePerHour,
                    totalPay: dataPayment.totalPay,
                    statusDate: "pending_booked",
                    startDate: new Date(bookingStartDate * 1000),
                    endDate: new Date(bookingEndDate * 1000),
                    billing: billingData.id
                },{
                    headers: {
                        Authorization: `Bearer ${dataLogged.jwt}`
                    }
                })
                const result = response.data
                if(result) Router.push(`/order/${result.id}`)
                setErrorMessage(null)
                setIsLoading(false)
            } catch(err) {
                setErrorMessage(err.response.data.message)
                setIsLoading(false)
            }
        }
        apiMakeOrder()
    }

    return (
    <>
        {isValid && <div className='booking__page-wrap'>
            <DetailHead />

            <div className='detail__content-wrap margin-bottom-40'>
                <div className='booking__page-head'>
                    <h2 className='margin-bottom-8'>Detail Checkout</h2>
                    <p className='margin-bottom-0'>
                        below is the date you choose, please continue payment by selecting the payment method
                    </p>

                    <div className='margin-top-20'>
                        <ListBookingDate
                            startDate={bookingStartDate}
                            endDate={bookingEndDate}
                        />
                    </div>
                </div>

                {errorMessage && <Alert
                    text={errorMessage}
                    type='danger'
                    classes='margin-top-20'
                />}

                <div className='booking__page-body margin-top-28'>
                    <h5>Billing Payment</h5>
                    <ul className='list__vertical-border-bottom margin-bottom-8'>
                        <li>
                            {billingData.fullName ? billingData.fullName : '-'}
                        </li>
                        <li>
                        {billingData.address ? billingData.address : '-'}
                        {billingData.district ? `, ${billingData.district}` : '-'}
                         {billingData.province ? `, ${billingData.province}` : '-'}
                         {billingData.country ? `, ${billingData.country}` : '-'}
                        </li>
                        <li>
                            {billingData.phoneNumber}
                        </li>
                    </ul>

                    <FormTextarea
                        labelText='Note:'
                        placeholder='note for us'
                        rows={5}
                        onChange={handleNote}
                    />

                    <div className='booking__content-total'>
                        <h5 className='margin-top-20'>Total Payment</h5>
                        <span>
                            {dataPayment.totalPay
                            ? Intl
                            .NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                            .format(dataPayment.totalPay)
                            : '-'}
                        </span>
                    </div>


                    <div className='detail__content-booking margin-top-16'>
                        <Button onClick={handleMakeOrder} text={isLoading ? 'Process Order...' : 'Make Order'}><JournalPlus /></Button>
                    </div>
                </div>
            </div>
        </div>}
    </>
    )
}

const mapStateToProps = state => {
    return {
        bookingMotorId: state.booking.motorId,
        bookingStartDate: state.booking.startDate,
        bookingEndDate: state.booking.endDate,
        bookingTotalDay: state.booking.totalDay,
        billingData: state.user.billingData
    }
}

export default connect(mapStateToProps, null)(BillingCheckoutSection)
