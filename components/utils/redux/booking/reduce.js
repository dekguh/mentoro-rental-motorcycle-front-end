const initState = {
    motorId: null,
}

export const bookingReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BOOKING_MOTOR_ID':
            return {
                ...state,
                motorId: action.payload
            }
        default:
            return state
    }
}