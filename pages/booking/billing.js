import Head from 'next/head'
import BillingCheckoutSection from '../../components/organisms/BillingCheckoutSection'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'

const BillingCheckoutPage = () => {
    return (
    <>
        <Head>
            <title>Mentoro - Profile</title>
        </Head>
        <div>
            <PrivateAuth>
                <BillingCheckoutSection />
            </PrivateAuth>
        </div>
    </>
    )
}

export default BillingCheckoutPage
