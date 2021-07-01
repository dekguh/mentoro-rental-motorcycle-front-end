import RegisterSection from '../../components/organisms/RegisterSection'
import PublicAuth from '../../components/utils/wrapper/PublicAuth'

const RegisterPage = () => {
    return (
        <PublicAuth>
            <RegisterSection />
        </PublicAuth>
    )
}

export default RegisterPage
