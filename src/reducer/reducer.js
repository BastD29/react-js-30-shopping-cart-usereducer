const reducer = (state, action) => {

    // console.log(state);
    // console.log(action);
    // console.log(action.type);

    switch (action.type){
        case 'CLEAR_CART': {
            return { ...state, cart: [] };
        }
        case 'DECREASE': {
            let tempCart = state.cart
                .map((cartItem) => {
                    if (cartItem.id === action.payload){
                        cartItem = { ...cartItem, amount: cartItem.amount - 1 }
                    }
                    return cartItem;
                })
                .filter((cartItem) => cartItem.amount !== 0)
            // console.log(tempCart);
            return { ...state, cart: tempCart }
        }
        case 'INCREASE': {
            let tempCart = state.cart   
                .map((cartItem) => {
                    if (cartItem.id === action.payload){
                        cartItem = { ...cartItem, amount: cartItem.amount + 1 }
                    }
                    return cartItem;
                })
            // console.log(tempCart);
                return { ...state, cart: tempCart }
        }
        case 'REMOVE': {
            return {
                ...state,
                cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
            }
        }
        case 'GET_TOTALS': {
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;

                cartTotal.total += itemTotal;
                // console.log(itemTotal);
                cartTotal.amount += amount;
                // console.log(amount);
                
                return cartTotal;
            },
            {
                total: 0,
                amount: 0
            })
            total = parseFloat(total.toFixed(2));
            return { ...state, total, amount };
        }
        case 'TOGGLE_AMOUNT': {
            return {
                ...state,
                cart: state.cart.map((cartItem) => {
                    if (cartItem.id === action.payload){
                        if (action.payload.toggle === 'inc'){
                            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 })
                        }
                        if (action.payload.toggle === 'dec'){
                            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 })
                        }
                    }
                    return cartItem;
                })
            }
        }
        case 'LOADING': {
            return { ...state, loading: true }
        }
        case 'DISPLAY_ITEMS': {
            return { ...state, loading: false, cart: action.payload }
        }
    }
}

export default reducer;