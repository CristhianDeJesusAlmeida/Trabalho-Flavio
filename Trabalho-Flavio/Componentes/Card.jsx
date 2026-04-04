export const Card = ({ nome, tipo, descricao, image }) => {
  return (
    <div className="card">
      <img src={image} alt={nome} />
      <h2>{nome}</h2>
      <p>Tipo: {tipo}</p>
      <p>{descricao}</p>
    </div>
  )
}
