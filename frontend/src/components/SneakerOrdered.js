import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listSneakers}  from '../actions/sneakerActions'


export default function SneakerOrder(props){
    const sneakerList = useSelector(state => state.sneakerList);
    console.log("this is sneakerDetails",sneakerList,"this is props:",props)
    const {sneakers, loading, error} = sneakerList;
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(listSneakers())
    }, [])

return loading? <div>Loading...</div>:error? <div>{error}</div>:<div>
    {

    }</div>
}
