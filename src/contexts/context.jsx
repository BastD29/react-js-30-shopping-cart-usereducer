import React, { useContext, useEffect, useReducer } from 'react';
import data from '../data/data.json';
import reducer from '../reducer/reducer';

// console.log(data);

const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
    }

    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
    }

    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])

    const fetchData = async () => {
        dispatch({ type: 'LOADING' })
        // const response = await fetch(data);
        const response = await fetch('data.json');
        // console.log(response);
        const cart = await response.json();
        // console.log(cart)
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppContext.Provider
            value={{
                state,
                increase,
                decrease,
                remove,
                clearCart,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };