import { Card } from "../Componentes/Card";
import { entidades } from "./data";


function App() {
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