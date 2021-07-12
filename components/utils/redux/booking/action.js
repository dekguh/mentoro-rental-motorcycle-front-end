const BOOKING_MOTOR_ID = 'BOOKING_MOTOR_ID'
const BOOKING_START_DATE = 'BOOKING_START_DATE'
const BOOKING_END_DATE = 'BOOKING_END_DATE'
const BOOKING_TOTAL_DAY = 'BOOKING_TOTAL_DAY'


export const updateMotorIdAct = (id) => {
    return {
        type: BOOKING_MOTOR_ID,
        payload: id
    }
}

export const updateStartDateBookingAct = start => {
    return {
        type: BOOKING_START_DATE,
        payload: start
    }
}

export const updateEndDateBookingAct = end => {
    return {
        type: BOOKING_END_DATE,
        payload: end
    }
}

export const updateTotalDayBookingAct = total => {
    return {
        type: BOOKING_TOTAL_DAY,
        payload: total
    }
}