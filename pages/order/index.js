import Head from 'next/head'
import ListOrderSection from '../../components/organisms/ListOrderSection'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'

const ListOrderPage = () => {
    return (
    <>
        <Head>
            <title>Mentoro - Order List</title>
        </Head>
        <PrivateAuth>
            <ListOrderSection />
        </PrivateAuth>
    </>
    )
}

export default ListOrderPage
