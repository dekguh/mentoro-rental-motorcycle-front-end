const STATUS_LOGIN = 'STATUS_LOGIN'

export function updateStatusLoginAct(status) {
    return {
        type: STATUS_LOGIN,
        payload: status
    }
}