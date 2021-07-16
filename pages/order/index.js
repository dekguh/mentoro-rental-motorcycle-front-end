import React from 'react'
import ListOrderSection from '../../components/organisms/ListOrderSection'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'

const ListOrderPage = () => {
    return (
        <PrivateAuth>
            <ListOrderSection />
        </PrivateAuth>
    )
}

export default ListOrderPage
