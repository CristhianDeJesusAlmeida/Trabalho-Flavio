export const Card = ({ nome, tipo, descricao, image,rarity, behavior }) => {
  return (
    <div className="card">
      <img src={image} alt={nome} />
      <h2>{nome}</h2>
      {rarity && <h3><strong>Raridade:</strong> {rarity}</h3>}
      {behavior && <h3><strong>Comportamento:</strong> {behavior}</h3>}
      <h3>Tipo: {tipo}</h3>
      <p>{descricao}</p>
    </div>
  )
}
