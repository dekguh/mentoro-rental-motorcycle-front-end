import Head from 'next/head'
import BillingSection from '../../components/organisms/BillingSection'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'

const BillingPage = () => {
    return (
    <>
        <Head>
            <title>Mentoro - Update Billing</title>
        </Head>
        <PrivateAuth>
            <BillingSection />
        </PrivateAuth>
    </>
    )
}

export default BillingPage
