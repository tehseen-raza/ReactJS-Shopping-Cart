import '../App.css';
import { useState, useEffect } from 'react';

const CartList = ({ cart }) => {

    const [CART, setCART] = useState([]);

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <>
            <div>
                {
                    CART?.map((cartItem, cartIndex) => {   // ?. Can use ***Optional Chaining Operator*** as well.
                        return (
                            <div key={cartIndex}>
                                <img src={cartItem.url} width={40} />
                                <span>{cartItem.name}</span>
                                <button
                                    onClick={() => {
                                        const _CART = CART.map((item, index) => {
                                            return cartIndex === index ? { ...item, qty: item.qty > 0 ? item.qty - 1 : 0 } : item
                                        })
                                        setCART(_CART)
                                    }}> - </button>

                                <span>{cartItem.qty}</span>

                                <button
                                    onClick={() => {
                                        const _CART = CART.map((item, index) => {
                                            return cartIndex === index ? { ...item, qty: item.qty + 1 } : item
                                        })
                                        setCART(_CART)
                                    }}
                                >+</button>
                                <span>${cartItem.price * cartItem.qty} /-</span>


                            </div>
                        )
                    })
                }

                <p> Total  <span></span>
                    {
                        CART.map(item => item.price * item.qty).reduce((total, value) => total + value, 0)
                    }
                </p>

            </div>
        </>
    )
}

export default CartList