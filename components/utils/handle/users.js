import nookies from 'nookies'
import { useRouter } from 'next/router'

export function userLogout() {
    const Router = useRouter()
    nookies.destroy(undefined, 'dataLogged')
    Router.push('/users/login')
}

export function emailValidRegex(email) {
    const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return pattern.test(email.toLowerCase())
}

export function usernameValidRegex(user) {
    const pattern = /^[a-z0-9]+$/g
    return pattern.test(user.toLowerCase())
}