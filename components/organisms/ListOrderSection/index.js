import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CardOrderList from '../../molecules/card/CardOrderList'
import { GET_ORDER_USER } from '../../utils/redux/user/action'
import DetailHead from '../detail/DetailHead'

const ListOrderSection = ({ actGetOrdersUser, dataOrder }) => {
    const [listOrder, setListOrder] = useState(null)

    useEffect(() => {
        actGetOrdersUser()
    }, [])

    useEffect(() => {
        if(!dataOrder) return null
        const sortir = dataOrder.sort((a, b) => b.id - a.id)
        setListOrder(sortir)
    }, [dataOrder])

    return (
        <div className='order__page-wrap'>
            <DetailHead />

            <div className='detail__content-wrap margin-bottom-40'>
                <div className='order__page-head margin-bottom-16'>
                    <h2 className='margin-bottom-8'>List Order</h2>
                    <p className='margin-bottom-0'>
                        Below is your order, please click the title to get detailed information
                    </p>
                </div>

                <div className='order__page-body'>
                    {listOrder && listOrder.map(data => (<CardOrderList
                        key={data.id}
                        classes='margin-bottom-12'
                        href={`/order/${data.id}`}
                        orderId={data.id}
                        status={data.status.replace(/_/g, ' ')}
                        totalPay={Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR'}).format(data.totalPay)}
                    />))}
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        actGetOrdersUser: () => dispatch({ type: GET_ORDER_USER })
    }
}

const mapStateToProps = state => {
    return {
        dataOrder: state.user.order
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOrderSection)
