import { useEffect, useState } from 'react'
import DetailHead from '../detail/DetailHead'
import ListBookingDate from '../../molecules/order/ListBookingDate'
import Button from '../../atomics/form/Button'
import { JournalPlus } from 'react-bootstrap-icons'
import ListCountdown from '../../molecules/list/ListCountdown'
import { parseCookies } from 'nookies'
import Api, { apiDeleteBookDateByOrderId } from '../../utils/Api'
import Alert from '../../atomics/Alert'

const OrderSection = ({ orderId }) => {
    const [dataOrder, setDataOrder] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const Cookies = parseCookies()
    const dataLogged = Cookies.dataLogged ? JSON.parse(Cookies.dataLogged) : undefined

    const getOrderId = async () => {
        try {
            const response = await Api.get(`orders/${orderId}`, {
                headers: {
                    Authorization: `Bearer ${dataLogged.jwt}`
                }
            })
            const result = response.data
            setDataOrder(result)
        } catch (err) {
            setErrorMessage(err.response.data.message)
        }
    }

    const updateOrderStatus = async (status) => {
        try {
            const response = await Api.put(`orders/${orderId}`, {
                status: status
            },{
                headers: {
                    Authorization: `Bearer ${dataLogged.jwt}`
                }
            })
            const result = response.data
            setDataOrder(result)
        } catch (err) {
            setErrorMessage(err.response.data.message)
        }
    }

    useEffect(() => {
        getOrderId()
    }, [])

    const handleCountEndedWaitPayment = async (ctx) => {
        if(ctx.completed && dataOrder.status == 'wait_payment') {
            const deleteDate = await apiDeleteBookDateByOrderId(dataOrder.id, dataLogged.jwt)
            return updateOrderStatus('cancel_payment')
        }
    }

    return (
    <>
        {dataOrder && <div className='order__page-wrap'>
            <DetailHead />

            <div className='detail__content-wrap margin-bottom-40'>
                <div className='order__page-head'>
                    <h2 className='margin-bottom-8'>#{dataOrder.id}</h2>
                    <p className='margin-bottom-0'>
                        {dataOrder.status == 'wait_payment' && 'below is the date you choose, please continue payment by selecting the payment method.'}
                        {dataOrder.status == 'success_payment' && 'below is the date you choose. you have made the payment, you will be contacted by us soon.'}
                        {dataOrder.status == 'cancel_payment' && 'your order status is cancelled. if you feel you have made a transaction, please contact admin.'}
                    </p>

                    <div className='margin-top-20'>
                        <ListBookingDate
                            startDate={dataOrder?.dates[0]?.startDate}
                            endDate={dataOrder?.dates[0]?.endDate}
                        />
                    </div>
                </div>

                <div className='order__page-body margin-top-28'>
                    {errorMessage && <Alert
                        text={errorMessage}
                        type='danger'
                        classes='margin-top-20 margin-bottom-20'
                    />}

                    <h5>Billing Payment</h5>
                    <ul className='list__vertical-border-bottom margin-bottom-8'>
                        <li>
                            Status: {dataOrder.status.replace(/_/g, ' ')}
                        </li>
                        <li>
                            {dataOrder.billing.fullName}
                        </li>
                        <li>
                            {dataOrder.billing.address ? dataOrder.billing.address : '-'}
                            {dataOrder.billing.district ? `, ${dataOrder.billing.district}` : '-'}
                            {dataOrder.billing.province ? `, ${dataOrder.billing.province}` : '-'}
                            {dataOrder.billing.country ? `, ${dataOrder.billing.country}` : '-'}
                        </li>
                        <li>
                            {dataOrder.billing.phoneNumber}
                        </li>
                        <li>
                            Note: {dataOrder.note ? dataOrder.note : '-'}
                        </li>
                        <li>
                            Date: {new Date(dataOrder.created_at).toLocaleString()}
                        </li>
                        <li>
                            Total day: {dataOrder.totalDay} days
                        </li>
                    </ul>

                    <div className='order__content-total'>
                        <h5 className='margin-top-20'>Total Payment</h5>
                        <span>
                            {Intl
                            .NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
                            .format(dataOrder.totalPay)}
                        </span>
                    </div>

                    <div className='detail__content-booking margin-top-16'>
                        {(dataOrder.status == 'wait_payment')
                        && <ListCountdown
                            date={dataOrder.created_at}
                            onMount={handleCountEndedWaitPayment}
                            onComplete={handleCountEndedWaitPayment}
                            millisecond={60000}>
                            <span>payment deadline expires</span>
                        </ListCountdown>}
                        {dataOrder.status == 'wait_payment'
                        && <Button text='Pay Now'><JournalPlus /></Button>}
                    </div>
                </div>
            </div>
        </div>}
    </>
    )
}

export default OrderSection
