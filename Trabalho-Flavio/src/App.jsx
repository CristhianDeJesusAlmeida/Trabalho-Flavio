import { useState } from "react";
import { Card } from "../Components/Card";
import { Filtrador } from "../Components/filtro";
import { entidades } from "./data";
import "./App.css";

function App() {
  const [filtro, setFiltro] = useState("Todos");

  let entidadesFiltrada;

  if (filtro === "Todos") {
    entidadesFiltrada = entidades;
  } else {
    entidadesFiltrada = entidades.filter(
      (entidade) => entidade.type === filtro
    );
  }

  return (
    <div className="container">
      <h1>Quadro das principais coisas de Minecraft</h1>

      <Filtrador setFiltro={setFiltro} />

      <div className="cards">
        {entidadesFiltrada.map((entidade) => (
          <Card
            key={entidade.name || entidade.image}
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