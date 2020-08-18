import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listSneakers}  from '../actions/sneakerActions'
// import Carousel from 'react-material-ui-carousel'
import Carousel from 'react-elastic-carousel';


export default function SneakerOrder(props){
    const sneakerList = useSelector(state => state.sneakerList);
    console.log("this is sneakerDetails",sneakerList,"this is props:",props)
    const {sneakers, loading, error} = sneakerList;
    console.log("this is sneakers",sneakers)
    // console.log("this is sneakers",sneakers[0])

    const dispatch = useDispatch();
    let arrIds = props.props.split(',')
    console.log(typeof arrIds[0]);
    let idAux =[];
    let arrNew =[];
    arrIds.map(ids =>{
        idAux.push(parseInt(ids))
    })
    console.log('this is the new props',idAux);
    console.log(typeof idAux[0]);
    // if(sneakers){
    //     arrNew.push(sneakers[item])
    // }
    // sneakers?arrNew.push(sneakers[item]):<div>{'no data'}</div>
    if(sneakers){
    idAux.map(sneakerObj=>{
        arrNew.push(sneakers[sneakerObj-1])
    })};

    console.log('this is arrNew',arrNew)

    useEffect(() => {
            dispatch(listSneakers())
    }, [])

return loading? <div>Loading...</div>:error? <div>{error}</div>:<Carousel className="list-players">{arrNew.map(item =>(
    <div>
        {item?<div><img src={item.imageSmall} /><div>$ {item.price}</div></div>:'nada'}
    </div>
))}
</Carousel>
}
