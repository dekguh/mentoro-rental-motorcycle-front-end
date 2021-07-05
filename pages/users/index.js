import React from 'react'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'
import ProfileSection from '../../components/organisms/ProfileSection'

const UserPage = () => {
    return (
        <PrivateAuth>
            <ProfileSection />
        </PrivateAuth>
    )
}

export default UserPage
