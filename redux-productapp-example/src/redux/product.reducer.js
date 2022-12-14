import { INCRE, DECRE } from "./product.action"

let initialState = {
    name: "FOSSIL",
    img: "https://rukminim1.flixcart.com/image/832/832/kyvvtzk0/watch/7/p/e/1-me3061it-fossil-men-original-imagbyhspyy3vsb9.jpeg?q=70",
    price: 12597,
    qty: 1,
}

let productReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCRE:
            return {...state,qty: state.qty +1}
        case DECRE:
            return {...state,qty: state.qty -1}
        default:
            return state

    }

}
export {productReducer}