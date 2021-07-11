const initState = {
    motorId: null,
    startDate: null,
    endDate: null
}

export const bookingReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BOOKING_MOTOR_ID':
            return {
                ...state,
                motorId: action.payload
            }
        case 'BOOKING_START_DATE':
            return {
                ...state,
                startDate: action.payload
            }
        case 'BOOKING_END_DATE':
            return {
                ...state,
                endDate: action.payload
            }
        default:
            return state
    }
}