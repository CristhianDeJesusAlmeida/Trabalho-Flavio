import { Card } from "../Components/Card";
import { entidades } from "./data";
import { useState } from "react";
import "./App.css";

function App() {
  const [filtro, setFiltro] = useState("Todos");
  const categorias = ["Todos", "Jogador", "Animal", "NPC", "Monstro", "Item"];

  let entidadesFiltrada;

  if (filtro === "Todos") {
    entidadesFiltrada = entidades;
  } else {
    entidadesFiltrada = entidades.filter(
      entidade => entidade.type === filtro
    );
  }

  return (
   <div className="container">
      <h1>Quadro das principais coisas de Minecraft</h1>

      
      <div className="filtros">
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Jogador">Jogador</option>
          <option value="NPC">NPC</option>
          <option value="Animal">Animal</option>
          <option value="Monstro">Monstro</option>
          <option value="Item">Item</option>
        </select>
      </div>


      <div className="cards">
        {entidadesFiltrada.map((entidade) => (
          <Card
            key={entidade.name || entidade.image} // Fallback caso name seja vazio
            rarity={entidade.rarity}
            nome={entidade.name}
            tipo={entidade.type}
            behavior={entidade.behavior}
            descricao={entidade.description}
            image={entidade.image}
          />
        ))}
      </div>
    </div>
  );
}
export default App;