import { useState } from "react";
import { Card } from "../Components/Card";
import { BuscaFiltro } from "../Components/Filtros";
import { entidades } from "/src/data";

 export function Main() {

  const [busca, setBusca] = useState("")
  const [filtro, setFiltro] = useState([]);

  const entidadesFiltrada = entidades.filter((entidade) => {
    const nomeEntidade = entidade.name.toLowerCase();
    const textoBusca = busca.toLowerCase();
    const passouBusca = nomeEntidade.includes(textoBusca);
    const semFiltro = filtro.length === 0 || filtro.includes("Todos");
    const tipoCorresponde = filtro.includes(entidade.type);
    return passouBusca && (semFiltro || tipoCorresponde)
  })

  return (
    <div className="container">
      <h1>Quadro das principais coisas de Minecraft</h1>

      <BuscaFiltro 
      busca={busca}
      setBusca={setBusca} 
      setFiltro={setFiltro} 
      />

      <div className="cards">
        {entidadesFiltrada.length > 0 ?(
            entidadesFiltrada.map((entidade) => (
                <Card
                    key={entidade.name || entidade.image}
                    rarity={entidade.rarity}
                    nome={entidade.name}
                    tipo={entidade.type}
                    behavior={entidade.behavior}
                    descricao={entidade.description}
                    image={entidade.image}
                />))
        ) : (<p>Nenhum resultado encontrado para "{busca}"</p>)
        }
      </div>
    </div>
  );
}
