import { SET_WEATHER, SET_MESSAGE } from '../actions/weatherActions';

const initialState = {
    weatherInfo: {},
    message: ''
};

const weatherReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weatherInfo: action.payload
            };
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            };
        default:
            return state;
    }
};

export default weatherReducer;