import { useEffect } from 'react'
import nookies from 'nookies'
import { updateStatusLoginAct } from '../redux/user/action'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

const PrivateAuth = ({isLogged, updateStatusLogin, children}) => {
    const Router = useRouter()

    useEffect(() => {
        const cookies = nookies.get(undefined)
        const dataLogged = cookies.dataLogged && JSON.parse(cookies.dataLogged) || undefined

        if(!dataLogged?.jwt || !dataLogged) Router.push('/users/login')
        if(dataLogged?.jwt) updateStatusLogin(true)
    }, [])

    return (
        <>
            {isLogged && children}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLogged: state.user.statusLogin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateStatusLogin: status => dispatch(updateStatusLoginAct(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateAuth)
