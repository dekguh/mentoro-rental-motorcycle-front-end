const STATUS_LOGIN = 'STATUS_LOGIN'
export const GET_BILLING_USER = 'GET_BILLING_USER'
export const SET_BILLING_USER = 'SET_BILLING_USER'
export const HAVE_BILLING_DATA = 'HAVE_BILLING_DATA'


export function updateStatusLoginAct(status) {
    return {
        type: STATUS_LOGIN,
        payload: status
    }
}

export function setBillingDataAct(data) {
    return {
        type: SET_BILLING_USER,
        payload: data
    }
}

export function setHaveBillingDataAct(status) {
    return {
        type: HAVE_BILLING_DATA,
        payload: status
    }
}