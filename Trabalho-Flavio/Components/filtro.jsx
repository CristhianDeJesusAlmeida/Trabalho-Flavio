import { useState } from "react";

export function Filtrador({ setFiltro }) {
  return (
    <div className="filtros">
      <select
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
  );
}