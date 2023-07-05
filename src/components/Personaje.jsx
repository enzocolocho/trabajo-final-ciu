import React from 'react';
import Card from 'react-bootstrap/Card';
import '../personaje.css';

const Personaje = ({ imagen, nombre, raza, descripcion, altura, peso }) => {

    return (
        <div className='main-personaje'>
            <Card className='personaje-card'>
                <Card.Img className='imagen-card' variant='top' src={imagen} />
                <Card.Body className='cuerpo-card'>

                    <div className="nombre">
                        <Card.Text className='descripcion-card'>
                            <strong>Nombre: </strong>
                        </Card.Text>
                        <Card.Text className='descripcion-card'>
                            {nombre}
                        </Card.Text>
                    </div>
                    <div className="raza">
                        <Card.Text className='descripcion-card'>
                            <strong>Raza: </strong>
                        </Card.Text>
                        <Card.Text className='descripcion-card'>
                            {raza}
                        </Card.Text>
                    </div>
                    <div className="altura">
                        <Card.Text className='descripcion-card'>
                            <strong>Altura: </strong>
                        </Card.Text>
                        <Card.Text className='descripcion-card'>
                            {altura}
                        </Card.Text>
                    </div>
                    <div className="peso">
                        <Card.Text className='descripcion-card'>
                            <strong>Peso: </strong>
                        </Card.Text>
                        <Card.Text className='descripcion-card'>
                            {peso}
                        </Card.Text>
                    </div>
                    <div className="descripcion">
                        <Card.Text className='descripcion-card'>
                            <strong>Descripción: </strong>
                        </Card.Text>
                        <Card.Text className='descripcion-card'>
                            {descripcion}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Personaje;