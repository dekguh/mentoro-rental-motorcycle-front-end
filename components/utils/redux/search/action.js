const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'
const UPDATE_SEARCH_TYPE_MOTOR = 'UPDATE_SEARCH_TYPE_MOTOR'

export function updateSearchTextAct(text) {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: text
    }
}

export function updateSearchTypeAct(typeMotor) {
    return {
        type: UPDATE_SEARCH_TYPE_MOTOR,
        payload: typeMotor
    }
}