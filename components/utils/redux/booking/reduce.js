const initState = {
    motorId: null,
    startDate: null,
    endDate: null,
    totalDay: null
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
        case 'BOOKING_TOTAL_DAY':
            return {
                ...state,
                totalDay: action.payload
            }
        default:
            return state
    }
}