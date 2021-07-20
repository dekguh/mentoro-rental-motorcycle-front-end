import Head from 'next/head'
import LoginSection from '../../components/organisms/LoginSection'
import PublicAuth from '../../components/utils/wrapper/PublicAuth'

const LoginPage = () => {
    return (
    <>
        <PublicAuth>
            <Head>
                <title>Mentoro - Login</title>
            </Head>
            <LoginSection />
        </PublicAuth>
    </>
    )
}

export default LoginPage
