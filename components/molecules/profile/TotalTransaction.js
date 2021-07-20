import { useEffect, useState } from 'react'
import CardNotif from '../card/CardNotif'
import { Bank2 } from 'react-bootstrap-icons'

const TotalTransaction = ({ dataOrder }) => {
    const [totalSuccess, setTotalSuccess] = useState(0)
    const [totalCancel, setTotalCancel] = useState(0)

    useEffect(() => {
        const getTotalSuccess = dataOrder ? dataOrder
            .filter(data => data.status == 'success_payment')
            .reduce((cum, cur) => cum + cur.totalPay, 0)
        : 0
        setTotalSuccess(getTotalSuccess)

        const getTotalCancel = dataOrder ? dataOrder
            .filter(data => data.status == 'cancel_payment')
            .reduce((cum, cur) => cum + cur.totalPay, 0)
        : 0
        setTotalCancel(getTotalCancel)
    }, [dataOrder])

    return (
        <div >
            <CardNotif
                classes='margin-bottom-12'
                title='Total Transaction'
                description={Intl
                .NumberFormat('id-ID', { style: 'currency', currency: 'IDR'})
                .format(totalSuccess + totalCancel)}>
                <Bank2 />
            </CardNotif>

            <CardNotif
                classes='margin-bottom-12'
                title='Total Success'
                description={Intl
                .NumberFormat('id-ID', { style: 'currency', currency: 'IDR'})
                .format(totalSuccess)}>
                <Bank2 />
            </CardNotif>

            <CardNotif
                classes='margin-bottom-12'
                title='Total Cancel'
                description={Intl
                .NumberFormat('id-ID', { style: 'currency', currency: 'IDR'})
                .format(totalCancel)}>
                <Bank2 />
            </CardNotif>
        </div>
    )
}

export default TotalTransaction
