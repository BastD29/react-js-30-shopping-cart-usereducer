import { useGlobalContext } from "../contexts/context";
import CartItem from "./CartItem";

export default function CartContainer() {

    const {
        state: { cart, total },
        clearCart,
    } = useGlobalContext();

    // if (cart.length === 0){
    //     return (
    //         <section className='cart'>
    //             <p>Empty cart</p>
    //         </section>
    //     )
    // }

    return (
        <section className='cart'>
            <div>
                {cart.map((item) => {
                    return <CartItem key={item.id}{...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <p>
                        Total: ${total}
                    </p>
                </div>
                <button
                    className='btn clear-btn'
                    onClick={clearCart}
                >
                    Clear cart
                </button>
            </footer>
        </section>
    )
}
