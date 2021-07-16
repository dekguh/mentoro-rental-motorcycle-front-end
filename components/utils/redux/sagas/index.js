import Api from '../../Api'
import nookies from 'nookies'
import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_BILLING_USER, GET_ORDER_USER, setBillingDataAct, setHaveBillingDataAct, setOrderDataAct } from '../user/action'
import { userLogout } from '../../handle/users'

function* watchBillingUser() {
    try {
        const cookies = nookies.get(undefined)
        const dataLogged = cookies.dataLogged && JSON.parse(cookies.dataLogged) || undefined
        const response = yield call(() => Api.get('billing-users', {
            headers: {
                Authorization: `Bearer ${dataLogged.jwt}`
            }
        }))
        if(response.data.length > 0) yield put(setHaveBillingDataAct(true))
        if(response.data.length <= 0) yield put(setHaveBillingDataAct(false))
        yield put(setBillingDataAct(response.data[0]))
    }catch(err) {
        yield put(setBillingDataAct({}))
        yield put(setHaveBillingDataAct(false))
        userLogout()
    }
}

function* watchOrdersUser() {
    const cookies = nookies.get(undefined)
    const dataLogged = cookies.dataLogged && JSON.parse(cookies.dataLogged) || undefined
    try {
        const response = yield call(() => Api.get('orders', {
            headers: {
                Authorization: `Bearer ${dataLogged.jwt}`
            }
        }))
        const result = response.data
        yield put(setOrderDataAct(result))
    } catch (err) {
        yield put(setOrderDataAct(null))
        userLogout()
    }
}

export function* rootSaga() {
    yield takeEvery(GET_BILLING_USER, watchBillingUser)
    yield takeEvery(GET_ORDER_USER, watchOrdersUser)
}