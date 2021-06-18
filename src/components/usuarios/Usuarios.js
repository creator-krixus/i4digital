import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUserDone } from '../../redux/usuarios'
import {Table} from 'react-bootstrap'
import './usuarios.css'


function Usuarios() {
    const [serchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch();
    const users = useSelector(store => store.usuarios.array);
    dispatch(getUserDone(users))
    return (
        <div className="Usuarios">
            <h1>Lista de usuarios</h1> 
            <input type="text" placeholder="Search by Name or User...." onChange={event => {setSearchTerm(event.target.value)}}></input>
                <div className="Usuarios__lista">
                <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>User</th>
                                    <th>Email</th>
                                    </tr>
                                </thead>
                        {    users.filter(val => {
                            if (serchTerm === ''){
                                return val
                            }else if (val.name.toLowerCase().includes(serchTerm.toLocaleLowerCase())){
                                return val
                            }else if (val.username.toLowerCase().includes(serchTerm.toLocaleLowerCase())){
                                return val
                            }else if (val.email.toLowerCase().includes(serchTerm.toLocaleLowerCase())){
                                return val
                            }
                        }).map(item => (
                                <tbody>
                                    <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    </tr>
                                </tbody> 
                            ))
                        }
                    </Table>  
                </div>
        </div>
    )

}

export default Usuarios
