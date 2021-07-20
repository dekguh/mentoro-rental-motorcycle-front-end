import { useState, useEffect } from 'react'

const TotalOrder = ({ dataOrder }) => {
    const [orderSuccess, setOrderSuccess] = useState(0)
    const [orderCancel, setOrderCancel] = useState(0)

    useEffect(() => {
        const listSuccess = dataOrder ? dataOrder.filter(data => data.status == 'success_payment') : 0
        const listCancel = dataOrder ? dataOrder.filter(data => data.status == 'cancel_payment') : 0
        setOrderSuccess(listSuccess)
        setOrderCancel(listCancel)
    }, [dataOrder])

    return (
        <div className='margin-bottom-32'>
            <ul className='list__total'>
                <li className='list__total-item'>
                    <span className='list__total-number'>{dataOrder?.length}</span>
                    <span className='list__total-label'>orders</span>
                </li>
                <li className='list__total-item'>
                    <span className='list__total-number'>{orderSuccess ? orderSuccess?.length : '-'}</span>
                    <span className='list__total-label'>success</span>
                </li>
                <li className='list__total-item'>
                    <span className='list__total-number'>{orderCancel ? orderCancel?.length : '-'}</span>
                    <span className='list__total-label'>cancel</span>
                </li>
            </ul>
        </div>
    )
}

export default TotalOrder
