import { useEffect } from 'react'
import nookies from 'nookies'
import { GET_BILLING_USER, updateStatusLoginAct } from '../redux/user/action'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

const PrivateAuth = ({isLogged, isBilling, updateStatusLogin, getBillingData, children}) => {
    const Router = useRouter()

    useEffect(() => {
        //nookies.destroy(undefined, 'dataLogged')
        const cookies = nookies.get(undefined)
        const dataLogged = cookies.dataLogged && JSON.parse(cookies.dataLogged) || undefined

        if(!dataLogged?.jwt || !dataLogged) Router.push('/users/login')
        if(dataLogged?.jwt) {
            getBillingData()
            updateStatusLogin(true)
        }
    }, [])

    useEffect(() => {
        if(!isBilling && !Router.pathname.includes('billing')) Router.push('/users/billing')
    }, [isBilling])

    return (
        <>
            {isLogged && children}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLogged: state.user.statusLogin,
        isBilling: state.user.isBilling
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateStatusLogin: status => dispatch(updateStatusLoginAct(status)),
        getBillingData: () => dispatch({ type: GET_BILLING_USER })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateAuth)
