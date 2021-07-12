import BillingCheckoutSection from '../../components/organisms/BillingCheckoutSection'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'

const BillingCheckoutPage = () => {
    return (
        <div>
            <PrivateAuth>
                <BillingCheckoutSection />
            </PrivateAuth>
        </div>
    )
}

export default BillingCheckoutPage
