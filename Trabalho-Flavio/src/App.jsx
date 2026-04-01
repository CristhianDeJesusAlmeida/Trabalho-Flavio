import { Card } from "../Components/Card";
import { entidades } from "./data";
import { useState } from "react";

function App() {
  const [filtro, setFiltro] = useState("Todos");
  const categorias = ["Todos", "Jogador", "Animal", "NPC", "Monstro", "Item"];

  return (
    <div>
      <h1>Entidades Minecraft</h1>
      {entidades.map((entidade) => (
        <Card
          key={entidade.name}
          rarity={entidade.rarity}
          nome={entidade.name}
          tipo={entidade.type}
          comportamento={entidade.behavior}
          descricao={entidade.description}
          image={entidade.image}
        />
      ))}
    </div>
  );
}

export default App;