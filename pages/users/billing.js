import { useEffect } from 'react'
import BillingSection from '../../components/organisms/BillingSection'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'

const BillingPage = () => {
    return (
        <PrivateAuth>
            <BillingSection />
        </PrivateAuth>
    )
}

export default BillingPage
