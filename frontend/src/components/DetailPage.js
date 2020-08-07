import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {detailsSneaker}  from '../actions/detailSneakerAction';

function DetailPage (props){

    const [size, setSize] = useState(8)

    const sneakerDetails = useSelector(state => state.sneakerDetails);
    console.log("this is sneakerDetails",sneakerDetails)
    const {sneaker, loading, error} = sneakerDetails
    console.log("This is sneakerDetails ",sneakerDetails)
    const dispatch = useDispatch();

    let index =  props.match.params.id
    console.log("This is sneaker detail id ",index)

    useEffect(()=>{
        dispatch(detailsSneaker(index))
    },[])

    const handleAddToCart = () =>{
        props.history.push(`/cart/${index}/?size=${size}`)
    }

return <div className="details-page">
    <Link to="/"><div className="back-to-home">Back to Home page</div></Link>
    <div>{loading? <div>Loading...</div> :error? <div>{error}</div>:
        <div className="details">
            <div className="details-image">
                <img src={sneaker.imageSmall} alt="sneakerImage"></img>
            </div>
            <div className="details-info">
                    <div>
                        {sneaker.name}
                    </div>
                    <div className="price-tag">
                        Price: <b>$ {sneaker.price}</b>
                    </div>

            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: ${sneaker.price}
                    </li>
                    <li>
                        Size:
                        <select className="drop-down-sizes"value={size} onChange={(e) =>{setSize(e.target.value)}}>
                            <option>8</option>
                            <option>8.5</option>
                            <option>9</option>
                            <option>9.5</option>
                            <option>10</option>
                            <option>10.5</option>
                            <option>11</option>
                        </select>
                    </li>
                    <li>
                        <button  onClick={handleAddToCart}>Add to cart</button>
                    </li>
                </ul>
            </div>
        </div>}</div>

    </div>

}

export default DetailPage;
