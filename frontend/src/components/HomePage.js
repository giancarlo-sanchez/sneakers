import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listSneakers}  from '../actions/sneakerActions'

function HomePage (props){

    const sneakerList = useSelector(state => state.sneakerList);
    console.log("this is sneakerDetails",sneakerList)
    const {sneakers, loading, error} = sneakerList;
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(listSneakers())
    }, [])

return loading? <div>Loading...</div>:error? <div>{error}</div>:<div className="homePage">
    <ul className="list-sneaker">
    {sneakers.map(sneaker =>(
     <Link to={`/sneakers/${sneaker.id}`}>


    <li key={sneaker.id}>
        <div className="sneaker">
            <Link to={`/sneakers/${sneaker.id}`}>
                <img className="sneaker-image" src={sneaker.imageSmall} alt="sneaker"/>
            </Link>

            <div className="sneaker-name">
                <Link to={"/sneakers/" + sneaker.id}>{sneaker.name}</Link>
            </div>
            <div className="list-sneaker__detailnPrice">
            <Link className="sneaker-brand" to={"/brands/"+sneaker.Brand.id}>
                    <div>{sneaker.Brand.name}</div>
                </Link>
                <Link to={`/sneakers/${sneaker.id}`}>
                    <div className="sneaker-price">$ {sneaker.price}</div>
                </Link>


            </div>



        </div>
    </li>
    </Link>
        ))}


        </ul>
    </div>

}

export default HomePage;
