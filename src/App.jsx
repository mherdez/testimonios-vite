import './style.css';
import Titulo from './components/Titulo';
import ListaUsuarios from './components/ListaUsuarios';

const App = () => {
  return (
    <>
      <Titulo titulo={'Testimonios'} />
      <ListaUsuarios />
    </>
  );
}

export default App;