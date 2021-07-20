import Head from 'next/head'
import NotifPageSection from '../../components/organisms/NotifPageSection'

const SuccessPaymentPage = () => {
    return (
    <>
        <Head>
            <title>Mentoro - Success</title>
        </Head>
        <div>
            <NotifPageSection
                image='/images/flat-success.png'
                title='Thanks you! your order success'
                description='payment has been successfully, if you have any questions please contact us immediately'
            />
        </div>
    </>
    )
}

export default SuccessPaymentPage
