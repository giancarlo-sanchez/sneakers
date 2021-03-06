import {  ADD_TO_CART_SUCCESS,  ADD_TO_CART_FAIL, REMOVE_FROM_CART, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from "../constants/sneakerConstants";

function addToCartReducer(state = { cartItems:[] }, action){
    switch (action.type){
        case  ADD_TO_CART_SUCCESS:
            const item = action.payload;
            return { cartItems: [...state.cartItems, item] };
            case   ADD_TO_CART_FAIL:
                return {loading: false, error: action.payload};
            case REMOVE_FROM_CART:
                return { cartItems: state.cartItems.filter(item => item.sneakerId !== action.payload)};
            case CART_SAVE_SHIPPING:
                return { ...state, shipping: action.payload };
            case CART_SAVE_PAYMENT:
                return { ...state, payment: action.payload };
            default:
                return state;
}
}

export default addToCartReducer;
