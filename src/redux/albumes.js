import axios from "axios"

//Constantes
const dataInicial = {
    array: []
}

//Type
const GET_ALBUMS = "GET_ALBUMS"

//Reducer
export default function albumsReducer(state=dataInicial, action){
    switch(action.type){
        case GET_ALBUMS:
            return {
                ...state,
                array: action.payload
            }
        default:
            return state    
    }
}

//Acciones
export const getAlbums = () => async(dispatch, getState) => {
    try {
       let res = await axios.get(`https://jsonplaceholder.typicode.com/albums`) 
       dispatch({
            type: GET_ALBUMS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)   
    }
}