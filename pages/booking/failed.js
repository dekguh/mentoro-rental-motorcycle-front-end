import Head from 'next/head'
import NotifPageSection from '../../components/organisms/NotifPageSection'

const FailedPaymentPage = () => {
    return (
    <>
        <Head>
            <title>Mentoro - Failed</title>
        </Head>
        <div>
            <NotifPageSection
                image='/images/flat-cancel.png'
                title='Oops! your order cancel/failed'
                description='payment has been successfully cancelled, if you have any questions please contact us immediately'
            />
        </div>
    </>
    )
}

export default FailedPaymentPage
