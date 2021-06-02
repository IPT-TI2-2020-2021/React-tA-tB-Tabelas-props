// App.js
// Esta classe será o ponto de partida da nossa aplicação
//************************************************************* */ 

// importar da pasta 'node_modules' a package do React 
import React from 'react';
// importar o componente 'Tabela'
import Tabela from './Tabela'
// importar o componente 'Tabela2'
import Tabela2 from './Tabela2'

// cria o 'componente' App
// neste caso é criada uma FUNÇÃO
class App extends React.Component {
  // todas as classes terão, obrigatoriamente,
  // um método chamado 'render'
  render() {
    // todo o componente tem obrigatoriamente de 'devolver' alguma coisa
    return (
      <div className="container"> {/* e apenas consegue devolver um ÚNICO objeto */}
        <h1>Lista de <i>tabelas</i> obtidas de diversas formas...</h1>

        <h2>Tabela puramente 'hard coded'</h2>
        <Tabela />
        <br />
        {/* junção de dois componentes dentro de um outro */}
        <h2>Tabela com componentes simples</h2>
        <Tabela2 />
      </div>
    );
  }
}

// um componente só é acessível se for 'exportado'
export default App;
