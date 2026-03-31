export const Card = ({ nome, tipo, descricao, image, rarity }) => {
  return (
    <div className="card">
      <img src={image} alt={nome} />
      <h2>{nome}</h2>
      <p>Tipo: {tipo}</p>
      <p>{descricao}</p>
      {tipo === "Item" ? <p>raridades: {rarity}</p> : null}
    </div>
  )
}
