import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAlbums} from '../../redux/albumes'
import {Button, Card } from 'react-bootstrap'
import './albums.css'

function Albums() {
    const dispatch = useDispatch();
    const albums = useSelector(store => store.albums.array);
    return (
        <div className="Albums">
           <h1>Lista de albums</h1> 
           <Button onClick={() => dispatch(getAlbums())} variant="primary">Mostrar albums</Button>
           <div className="Albums__card">
                {
                   albums.map(item => (
                    <Card style={{ width: '18rem' }} className="Albums__card-card">
                        <Card.Img variant="top" src={`https://picsum.photos/id/${item.id+2}/200/300`} />
                        <Card.Body>
                            <Card.Title>Id: {item.id}</Card.Title>
                            <Card.Text>
                                <h2>Titulo</h2>        
                            </Card.Text>
                            <Card.Text>
                                {item.title}          
                            </Card.Text>
                            <Card.Text>
                                <strong>UserId: {item.userId}</strong>           
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    ))
                } 
           </div>
        </div>
    )
}

export default Albums
