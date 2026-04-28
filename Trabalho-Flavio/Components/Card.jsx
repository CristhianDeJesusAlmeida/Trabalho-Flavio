import { useState } from "react";

export const Card = ({ nome, tipo, descricao, image, rarity, behavior,adicionar, remover}) => {
  const [clicadoFavorito,setClicadoFavorito] = useState([])
  const gerenciarFavorito = (valor) =>{
    const favoritar = valor ? adicionar : remover
    setClicadoFavorito(favoritar);
  }

  
  return (
    <div className="card">
      <img src={image} alt={nome} />
      <h2>{nome}</h2>
      {tipo === "Item" ? (
        <h3><strong>Raridade:</strong> {rarity}</h3>
      ) : null}
      {tipo !== "Item" ? (
        <h3><strong>Comportamento:</strong> {behavior}</h3>
      ) : null}

      <h3>Tipo: {tipo}</h3>
      <p>{descricao}</p>
      <button onClick={() => gerenciarFavorito}>Favoritar</button>
    </div>
  );
};
