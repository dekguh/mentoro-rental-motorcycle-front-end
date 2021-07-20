import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'
import ProfileSection from '../../components/organisms/ProfileSection'
import Head from 'next/head'

const UserPage = () => {
    return (
    <>
        <Head>
            <title>Mentoro - Profile</title>
        </Head>
        <PrivateAuth>
            <ProfileSection />
        </PrivateAuth>
    </>
    )
}

export default UserPage
