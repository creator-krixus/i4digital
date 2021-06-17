import axios from "axios"

//Constantes
const dataInicial = {
    array: []
}
//Type
const GET_USERS_DONE = 'GET_USERS_DONE'

//Reducer
export default function usuariosReducer(state = dataInicial, action){
    switch(action.type){
        case GET_USERS_DONE:
            return {
                ...state,
                array: action.payload 
            }
        default:
            return state    
    }
}

//Acciones
export const getUserDone = () => async(dispatch, getState) => {
    try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        dispatch({
            type: GET_USERS_DONE,
            payload : res.data
        })
    } catch (error) {
        console.log(error)
    }
}