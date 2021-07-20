import Head from 'next/head'
import OrderSection from '../../components/organisms/OrderSection'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'

const OrderPage = ({ id }) => {
    return (
    <>
        <Head>
            <title>Mentoro - Order Detail</title>
        </Head>
        <PrivateAuth>
            <OrderSection orderId={id} />
        </PrivateAuth>
    </>
    )
}
export async function getServerSideProps(ctx) {
    const { id } = ctx.query
    return {
        props: {
            id,
        }
    }
}

export default OrderPage
