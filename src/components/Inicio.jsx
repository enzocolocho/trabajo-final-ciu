import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../inicio.css';

const Inicio = ({ guardarUsuario }) => {

    //Hook para el username
    const [username, editarUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        guardarUsuario(username);
    }

    const handleChange = (e) => {
        editarUsername(e.target.value);
    }

    return (
        <div className='cuerpo-inicio'>
            <Form className='formulario-username' onSubmit={handleSubmit}>
                <Form.Group className='grupo-formulario'>
                    <h4 className='titulo-formulario'>Bienvenido Guerrero Z</h4>
                    <div className="ingresar-usuario">
                        <p className='parrafo-formulario'>Ingrese su nombre: </p>
                        <Form.Control
                            id='input-username'
                            type='text'
                            placeholder='Akira Toriyama'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <Button
                        className='boton-formulario'
                        variant='primary'
                        type='submit'
                    > Ingresar </Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Inicio;