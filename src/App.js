import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import { useEffect, useState, useTransition } from 'react';

function App() {

  //Hook para mostrar el inicio o el main
  const [mostrarInicio, editarMostrarInicio] = useState(true);

  //Hook de transición
  const [,iniciarTransicion] = useTransition({ timeoutMs: 100 });

  useEffect(() => {
    const username = localStorage.getItem('username');
    iniciarTransicion(() => {
      editarMostrarInicio(!username);
    });
  }, [iniciarTransicion]);

  const guardarUsuario = (usuario) => {
    localStorage.setItem('username', usuario);
    iniciarTransicion(() => {
      editarMostrarInicio(false);
    });
  }


  return (
    <div>
      <Header />
      {
        mostrarInicio
          ?
          <Inicio guardarUsuario={guardarUsuario} />
          :
          <Main />
      }
      <Footer />
    </div>
  );
}

export default App;
