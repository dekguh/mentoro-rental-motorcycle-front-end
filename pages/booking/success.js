import React from 'react'
import NotifPageSection from '../../components/organisms/NotifPageSection'

const SuccessPaymentPage = () => {
    return (
        <div>
            <NotifPageSection
                image='/images/flat-cancel.png'
                title='Oops! your order cancel/failed'
                description='payment has been successfully cancelled, if you have any questions please contact us immediately'
            />
        </div>
    )
}

export default SuccessPaymentPage
