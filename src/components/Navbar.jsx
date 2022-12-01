import { useGlobalContext } from "../contexts/context"


export default function Navbar() {

    const {
        state: { amount }
    } = useGlobalContext();

    return (
        <nav style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "400px" }} >
            <p>Navbar</p>
            <div className='amount-container'>
                <p className='total-amount'>
                    {amount}
                </p>
            </div>
        </nav>
    )
}
