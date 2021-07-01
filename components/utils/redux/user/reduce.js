const initState = {
    statusLogin: false
}

export const userReducer = (state = initState, action) => {
    switch(action.type) {
        case 'STATUS_LOGIN':
            return {
                ...state,
                statusLogin: action.payload
            }
        default:
            return state
    }
}