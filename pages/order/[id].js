import OrderSection from '../../components/organisms/OrderSection'
import Api from '../../components/utils/Api'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'
import { parseCookies } from 'nookies'

const OrderPage = ({ id }) => {
    return (
        <PrivateAuth>
            <OrderSection orderId={id} />
        </PrivateAuth>
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
