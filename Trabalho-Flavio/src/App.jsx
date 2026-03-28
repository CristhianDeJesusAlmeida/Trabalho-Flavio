import { Card } from "../Componentes/Card";
import { entidades } from "./data";
import { items } from "./data";


function App() {
  return (
    <div>
      <h1>Entidades Minecraft</h1>
      {entidades.map((entidade) => (
        <Card
          key={entidade.nome}
          nome={entidade.nome}
          tipo={entidade.tipo}
          descricao={entidade.descricao}
          image={entidade.image}
        />
      ))}
    </div>
  );
}

export default App;