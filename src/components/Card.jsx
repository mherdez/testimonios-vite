
const Card = ( {usuario} ) => {

  const { foto, nombre, pais, profesion, empresa, testimonio } = usuario;

  return (
    <div className='card'>
      <div className="card-foto">
        <img src={foto} alt={nombre} />
      </div>
      <div className="card-info">
        <h2>{nombre} en {pais}</h2>
        <h3>{profesion} en {empresa}</h3>
        <p>{testimonio}</p>
      </div>
    </div>
  )
}

export default Card;