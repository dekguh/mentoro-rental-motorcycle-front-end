const STATUS_LOGIN = 'STATUS_LOGIN'
export const GET_BILLING_USER = 'GET_BILLING_USER'
export const SET_BILLING_USER = 'SET_BILLING_USER'
export const HAVE_BILLING_DATA = 'HAVE_BILLING_DATA'
export const GET_ORDER_USER = 'GET_ORDER_USER'
export const SET_ORDER_USER = 'SET_ORDER_USER'


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

export function setOrderDataAct(data) {
    return {
        type: SET_ORDER_USER,
        payload: data
    }
}