import React, { useState, useEffect, useTransition } from 'react';
import Personaje from './Personaje';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../main.css';

const Main = () => {

    /**
     * -- INFO API --
     * 
     * LINK: https://unofficialdbzapi.cyclic.app/api/
     * 
     * GITHUB: https://github.com/RyanShort13110/dbz-api
     * 
     * SITIO WEB: https://unofficialdbzapi.cyclic.app
     */

    //Hook de estado de búsqueda de personaje
    const [hayBusqueda, editarEstadoDeBusqueda] = useState(false);

    //Busco el nombre del usuario
    const username = localStorage.getItem('username');

    //URL de Personaje
    const urlAPI = "https://unofficialdbzapi.cyclic.app/api/";

    //Hook para guardar el personaje
    const [personaje, editarPersonaje] = useState();

    //Hooks para cada campo que voy a mostrar
    const [pic, editarImagen] = useState("");
    const [name, editarNombre] = useState("");
    const [race, editarRaza] = useState("");
    const [about, editarDescripcion] = useState("");
    const [height, editarAltura] = useState("");
    const [weight, editarPeso] = useState("");

    //Hook para guardar la URL del personaje
    const [urlPersonaje, editarUrlPersonaje] = useState("");

    //Hook para el nombre que voy a buscar
    const [nombreABuscar, editarNombreABuscar] = useState("");


    //HANDLECHANGE y SUBMITFORM
    const handleChange = (e) => {
        const valor = e.target.value;
        editarNombreABuscar(valor);
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (nombreABuscar) {
            const nuevaUrlPersonaje = urlAPI + nombreABuscar;
            editarUrlPersonaje(nuevaUrlPersonaje);
            editarEstadoDeBusqueda(true);
        }
    };

    //Hook para consultar la API cuando se termine de actualizar el useState del url del personaje
    useEffect(() => {
        if (urlPersonaje) {
            consultarAPIDragonBall();
        }
    }, [urlPersonaje]);


    //Función para consultar la API
    const consultarAPIDragonBall = async () => {

        fetch(urlPersonaje)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Error en la solicitud');
                }
            })
            .then(personaje => {

                if (personaje.name === "Unknown character") {
                    alert("Nombre de personaje no válido");
                } else {
                    editarPersonaje(personaje);

                    editarNombre(personaje.name);
                    editarImagen(personaje.pic);
                    editarRaza(personaje.race);
                    editarDescripcion(personaje.about);
                    editarAltura(personaje.height);
                    editarPeso(personaje.weight);
                }
            })
            .catch((error) => {
                alert(error);
            })
    }

    return (
        <div className='main'>
            <div className="bienvenida">
                <h3>Bienvenido {username}</h3>
            </div>
            <div className="main-personajes">
                <Form className='personajes-formulario'>
                    <Form.Group className='formulario'>
                        <h4 className='titulo' id='main-personajes'>Personajes</h4>
                        <Form.Control
                            id='busqueda'
                            type='text'
                            placeholder='Gohan'
                            required
                            onChange={handleChange}
                        />
                        <Button
                            className='boton'
                            variant='primary'
                            onClick={submitForm}
                        > Buscar </Button>
                    </Form.Group>
                </Form>
                {hayBusqueda && personaje && personaje.name !== "Unknown character" && (
                    <Personaje
                        imagen={pic}
                        nombre={name}
                        raza={race}
                        descripcion={about}
                        altura={height}
                        peso={weight}
                    />
                )}
            </div>
            <div className="about-me">
                <h4 id='main-about-me'>About me</h4>
                <p>¡Hola guerrero Z! Me llamo Enzo Colocho y, al igual que vos,
                    soy un fanático de <b>Dragon Ball</b>. También soy estudiante de la
                    tecnicatura en programación de la Universidad Nacional de
                    Hurlingham, tan sólo me quedan 2 materias para recibirme.
                    Soy fanático de Dragon Ball desde que tengo memoria, tengo miles
                    de recuerdos en la escuela primaria de charlar con mis amigos
                    sobre cuando Gokú se transformó en Super Saiyajin contra Freezer
                    en Namek, también recuerdo intercambiar cartas y pasar horas
                    jugando al Budokai Tenkaichi 3. Actualmente estoy coleccionando
                    los mangas de Dragon Ball Super, me falta tan solo uno que todavía
                    no salió a la venta en Argentina; también tengo un tatuaje de Gohan
                    (mi personaje favorito) cuando se transforma por primera vez en
                    SSJ2, dicho tatuaje me cubre todo el antebrazo. Me gustaría hacer
                    un tatuaje similar en el otro brazo pero con otro/s personaje/s,
                    aún no lo tengo decidido pero cuando me decida voy a llevarlo a
                    cabo.</p>
            </div>
        </div>
    );
}

export default Main;