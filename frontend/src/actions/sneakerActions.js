import { SNEAKER_LIST_SUCCESS, SNEAKER_LIST_FAIL, SNEAKER_LIST_REQUEST } from "../constants/sneakerConstants";
import axios from "axios";
import { baseUrl } from '../config';


const listSneakers = () => async(dispatch) =>{
    try{
        dispatch({type: SNEAKER_LIST_REQUEST });
        const {data} = await axios.get(baseUrl+'/sneakers/');
        dispatch({type: SNEAKER_LIST_SUCCESS, payload: data.sneakers})
        }catch(error){
            dispatch({type: SNEAKER_LIST_FAIL, payload:error.message})
        }

}

export {listSneakers}
