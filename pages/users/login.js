import LoginSection from '../../components/organisms/LoginSection'
import PublicAuth from '../../components/utils/wrapper/PublicAuth'

const LoginPage = () => {
    return (
    <PublicAuth>
        <LoginSection />
    </PublicAuth>
    )
}

export default LoginPage
