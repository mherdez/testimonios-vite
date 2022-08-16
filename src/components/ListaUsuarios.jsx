
import { usuarios } from "../helpers/usuarios";
import Card from "./Card";

const ListaUsuarios = () => {

  return (
    <>
      { usuarios.map( usuario => (
        <Card key={ usuario.id } usuario={usuario} />
      )) }
    </>
  );
};

export default ListaUsuarios;