import React, { useEffect } from 'react'
import {addCart} from '../actions/addToCart'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { removeFromCart } from '../actions/addToCart'



function CartPage(props){


    const addToCart = useSelector(state => state.addToCart)

    const {cartItems} = addToCart;

    const dispatch = useDispatch();

    const removeItemFromCartHandler= (sneakerId)=>{
        dispatch(removeFromCart(sneakerId))
    }

    const checkOutHandler = ()=>{
        props.history.push('/signin?redirect=shipping')
    }

    let index =  props.match.params.id;
    let query = props.location.search;
    const size = query? Number(query.split("=")[1]): 8;


    useEffect(()=>{
        if(index){
            dispatch(addCart(index, size))
        }
    },[])

    return <div className="cart">
        <div className="back-to-home"><Link to="/">Back to Home page</Link></div>

        <div className="cart-component">

        <div className="cart-list">

<ul className="cart-list-container">
        <div className="cart-action">
            <div className="cart-action__shopping-cart">
            Shopping Cart
            </div>

            </div>
    {
        cartItems.length === 0? <div className="empty-cart">The Cart is Empty</div>:cartItems.map(item =><li><div className="cart-image">

            <img src={item.image} alt="item-in-cart" />
            </div>
            <div >
                <div className="cart-name">
                   <div>
                       <Link to={`/sneakers/${item.sneakerId}`}>{item.name}</Link>
                    </div>
                </div>
                <div>
                    <div className="cart-name__size">
                    Size:{item.size}
                    </div>


                    <button className="cart-remove" onClick={()=>removeItemFromCartHandler(item.sneakerId)}>X</button>
                </div>
                <div className="cart-price">price ${item.price}</div>
            </div>

    </li>)
    }

</ul>

</div>

        </div>

        <div className="cart-action-root">
        <div className="cart-action">
                <div className="cart-action_subtotal">
                    <div>SubTotal</div>
                    <div>${cartItems.reduce ((a,c) => a + c.price, 0)}</div>
                </div>
                <div className="cart-action_button">
                    <button onClick={checkOutHandler} className="button-add-cart" disabled={cartItems.length === 0}>
                        Checkout
                    </button>
                </div>

        </div>

        </div>

    </div>

}

export default CartPage;
