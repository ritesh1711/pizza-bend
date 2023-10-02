export const getallpizzasreducers = (state = { pizzas: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case 'GET_PIZZA_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'GET_PIZZA_SUCCESS':
            return {
                ...state,
                loading: false,
                pizzas: action.payload
            };
        case 'GET_PIZZA_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};