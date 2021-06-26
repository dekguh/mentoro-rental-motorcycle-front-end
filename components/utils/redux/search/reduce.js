const initialState = {
    text: '',
    typeMotor: ''
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_SEARCH_TEXT':
            return {
                ...state,
                text: action.payload
            }
        case 'UPDATE_SEARCH_TYPE_MOTOR':
            return {
                ...state,
                typeMotor: action.payload
            }
        default:
            return state;
    }
}