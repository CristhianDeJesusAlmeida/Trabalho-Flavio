import { Card } from "../Componentes/Card";
import { Itens } from "../Componentes/Itens";
import { entidades } from "./data";
import { ItensMine } from "./data";


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
      <h1>Itens Minecraft</h1>
      {ItensMine.map((item) => (
        <Itens
          key={item.nome}
          nome={item.nome}
          tipo={item.tipo}
          descricao={item.descricao}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default App;