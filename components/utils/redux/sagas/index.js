import Api from '../../Api'
import nookies from 'nookies'
import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_BILLING_USER, setBillingDataAct, setHaveBillingDataAct } from '../user/action'

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
    }
}

export function* rootSaga() {
    yield takeEvery(GET_BILLING_USER, watchBillingUser)
}