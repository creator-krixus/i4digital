import axios from "axios"
import swal from 'sweetalert'

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
        if (res.status === 200){
            dispatch({
                type: GET_USERS_DONE,
                payload : res.data
            })
        }
    } catch (error) {
        swal({
            title: 'Error',
            text: 'Ups algo salio mal',
            icon: 'error',
            button: 'Aceptar'
        })
    }
}