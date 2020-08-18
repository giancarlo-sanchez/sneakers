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
    const dispatch = useDispatch();
    let arrIds = props.props.split(',')
    console.log(typeof arrIds[0]);
    let idAux =[];
    arrIds.map(ids =>{
        idAux.push(parseInt(ids))
    })
    console.log(typeof idAux[0]);

    useEffect(() => {
            dispatch(listSneakers())
    }, [])

return loading? <div>Loading...</div>:error? <div>{error}</div>:<Carousel className="list-players">{idAux.map(item =>(
    <div key={item}>
        {/* <div>{sneakers[0][item-1]}</div> */}
        {/* <PlayerPage playerInfo={player.player_id}/> */}
    </div>
))}
</Carousel>
}
