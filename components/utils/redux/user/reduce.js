const initState = {
    statusLogin: false,
    billingData: {
        id: null,
        fullName: '',
        address: '',
        district: '',
        province: '',
        country: '',
        phoneNumber: ''
    },
    isBilling: true,
}

export const userReducer = (state = initState, action) => {
    switch(action.type) {
        case 'STATUS_LOGIN':
            return {
                ...state,
                statusLogin: action.payload
            }
        case 'SET_BILLING_USER':
            return {
                ...state,
                billingData: action.payload
            }
        case 'HAVE_BILLING_DATA':
            return {
                ...state,
                isBilling: action.payload
            }
        default:
            return state
    }
}