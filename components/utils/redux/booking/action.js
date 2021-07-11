const BOOKING_MOTOR_ID = 'BOOKING_MOTOR_ID'

export const updateMotorIdAct = (id) => {
    return {
        type: BOOKING_MOTOR_ID,
        payload: id
    }
}