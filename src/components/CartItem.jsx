import { useGlobalContext } from '../contexts/context';

export default function CartItem({ id, img, title, price, amount }) {

    const { increase, decrease, remove } = useGlobalContext();

    return (
        <article 
            className='cart-item'
            style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "400px", justifyContent: "space-between" }}
        >
            {/* <img src={img} alt={title} /> */}
            <div style={{ border: "solid 1px", width: "50%", padding: "5px" }}>
                <p>{title}</p>
                <p>{price}</p>
                <button 
                    className='remove-btn'
                    onClick={() => remove(id)}
                >
                    Remove
                </button>
            </div>
            <div style={{ border: "solid 1px", width: "20%", padding: "5px" }}>
                <button 
                    className='amount-btn'
                    onClick={() => increase(id)}
                >
                    Up
                </button>
                <p className='amount'>{amount}</p>
                <button
                    className='amount-btn'
                    onClick={() => decrease(id)}
                >
                    Down
                </button>
            </div>
        </article>
    )
}
