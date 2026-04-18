import { useState } from "react";
export function BuscaFiltro({ busca, setBusca, setFiltro }) {
  const [clicado,setClicado] = useState([])
  const gerenciarClique = (valor) => {
    const novaLista = valor === "Todos" ? [] : clicado.includes(valor) ? clicado.filter((item) => item !== valor) : [...clicado, valor];
    setClicado(novaLista);
    setFiltro(novaLista);
  }
  const estiloBotao = (valor) => {
    const estaAtivo = valor === "Todos" ? clicado.length === 0 || clicado.includes("Todos") : clicado.includes(valor)

    return {
      backgroundColor: estaAtivo ? "green" : "gray",
      width: "100px",
      height: "50px",
      cursor: "pointer",
      border: "none",
      margin: "5px",
      color: "white",
      borderRadius: "5px"
    }
  };
  return (
    <div className="filtros">
       <button onClick={() => gerenciarClique("Todos")} style={estiloBotao("Todos")}>Todos</button>
       <button onClick={() => gerenciarClique("Jogador")} style={estiloBotao("Jogador")}>Jogador</button>
       <button onClick={() => gerenciarClique("Animal")} style={estiloBotao("Animal")}>Animal</button>
        <button onClick={() => gerenciarClique("Monstro")} style={estiloBotao("Monstro")}>Monstro</button>
        <button onClick={() => gerenciarClique("Item")} style={estiloBotao("Item")}>Item</button>

      <input
        className="search-input"
        type="text"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
/>

    </div>
  );
}