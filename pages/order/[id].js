import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import OrderSection from '../../components/organisms/OrderSection'
import PrivateAuth from '../../components/utils/wrapper/PrivateAuth'

const OrderPage = () => {
    const [paramId, setParamId] = useState(null)
    const Router = useRouter()
    const { id } = Router.query

    useEffect(() => {
        setParamId(id)
    }, [id])

    return (
        <PrivateAuth>
            {paramId && <OrderSection orderId={paramId} />}
        </PrivateAuth>
    )
}

export default OrderPage
