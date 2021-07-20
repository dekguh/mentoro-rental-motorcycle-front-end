import Head from 'next/head'
import RegisterSection from '../../components/organisms/RegisterSection'
import PublicAuth from '../../components/utils/wrapper/PublicAuth'

const RegisterPage = () => {
    return (
    <>
        <Head>
            <title>Mentoro - Register</title>
        </Head>
        <PublicAuth>
            <RegisterSection />
        </PublicAuth>
    </>
    )
}

export default RegisterPage
