import React, {Fragment, useState} from 'react'
import swal from 'sweetalert'

import './publicaciones.css'

const Publicaciones = () => {
    const [data, setData] = useState({
        email: '',
        nombre: '',
        textArea:''
    })

    const handleInput = (event) => {
        /* console.log(event.target.value) */
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const  sendData = (event) => {
        event.preventDefault();
        if (data.nombre === '' || data.email === '' || data.textArea == ''){
            swal({
                title: 'Alert',
                text:'Debes completar todos los campos',
                icon: 'warning',
                buttons: 'Aceptar'
            })
        }else{
            swal({
                title: 'Exito',
                text:'Datos enviados con exito',
                icon: 'success',
                buttons: 'Aceptar'
            })
        }
    }
    return (
        <Fragment>
        <div className="Publicaciones">
            <form onSubmit={sendData} className="Publicaciones__form">
                <div className="Publicaciones__input">
                    <input
                    className="input"
                    placeholder="Nombre"
                    type="text"
                    name="nombre"
                    onChange={handleInput}
                    >
                    </input>
                </div>
                <div className="Publicaciones__input">
                    <input
                    className="input"
                    placeholder="Correo@adasdsadfsef"
                    type="email"
                    name="email"
                    onChange={handleInput}
                    >
                    </input>
                </div>
                <div className="Publicaciones__area">
                    <textarea
                    placeholder="Dejanos tu comentario aqui"
                    type="textarea"
                    name="textArea"
                    onChange={handleInput}
                    >
                    </textarea>
                </div>
                <div>
                    <button className="btn">Send</button>
                </div>
            </form>
        </div>
        </Fragment>
    )
}

export default Publicaciones
