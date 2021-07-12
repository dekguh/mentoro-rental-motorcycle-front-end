import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import DetailHead from '../detail/DetailHead'
import Alert from '../../atomics/Alert'
import { useRouter } from 'next/router'
import { apiCheckMotorId } from '../../utils/Api'
import ListBookingDate from '../../molecules/order/ListBookingDate'
import FormTextarea from '../../molecules/form/FormTextarea'
import Button from '../../atomics/form/Button'
import { JournalPlus } from 'react-bootstrap-icons'
import { discountPrice, totalPriceByPriceRent } from '../../utils/handle/booking'

const BillingCheckoutSection = ({ billingData, bookingMotorId, bookingStartDate, bookingEndDate, bookingTotalDay }) => {
    const Router = useRouter()
    const [isValid, setIsValid] = useState(false)
    const [dataMotor, setDataMotor] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [dataPayment, setDataPayment] = useState({
        paymentMethod: '',
        totalPay: '',
        totalDiscount: '',
        note: ''
    })

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
                totalPay: Math.ceil(totalPrice)
            })
        }
    }, [dataMotor])

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
                    />

                    <div className='booking__content-total'>
                        <h5 className='margin-top-20'>Total Payment</h5>
                        <span>IDR 35.000,00</span>
                    </div>


                    <div className='detail__content-booking margin-top-16'>
                        <Button text={isLoading ? 'Process Order...' : 'Make Order'}><JournalPlus /></Button>
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
