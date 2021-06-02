// App.js
// Esta classe será o ponto de partida da nossa aplicação
//************************************************************* */ 

// importar da pasta 'node_modules' a package do React 
import React from 'react';
// importar o componente 'Tabela'
import Tabela from './Tabela'
// importar o componente 'Tabela2'
import Tabela2 from './Tabela2'
// importar o componente 'Tabela3'
import Tabela3 from './Tabela3'


// cria o 'componente' App
// neste caso é criada uma FUNÇÃO
class App extends React.Component {
  // todas as classes terão, obrigatoriamente,
  // um método chamado 'render'
  render() {

    // esta variável é imutável
    // e, essa é uma das características dos PROPS
    const alunos = [
      {
        nome: "João",
        apelido: "Lopes"
      },
      {
        nome:"Luísa",
        apelido:"Matos"
      },
      {
        nome: "Mário",
        apelido: "Santos"
      },
      {
        nome: "Ana",
        apelido: "Silva"
      }
    ]


    // todo o componente tem obrigatoriamente de 'devolver' alguma coisa
    return (
      <div className="container" > {/* e apenas consegue devolver um ÚNICO objeto */}
        < h1 > Lista de <i> tabelas</i > obtidas de diversas formas...</h1 >

        <h2>Tabela puramente 'hard coded'</h2>
        <Tabela />
        <br />

        {/* junção de dois componentes dentro de um outro */}
        <h2>Tabela com componentes simples</h2>
        <Tabela2 />

        {/* uso de PROPS
             um PROP é uma 'propriedade' que se atribui a uma variável
             de certa forma, irá funcionar como o ViewBag da .NET */}
        <br />
        <h2>Tabela com dados 'definidos externamente'</h2>
        {/* 'dadosAlunos' é uma variável de entrada no componente
              Naturalmente, do lado do componente existirá um parâmetro para receber estes dados */}
        {/*  {alunos} - 'alunos' será o nome dos dados
                        está escrita entre chavetas {} pq é a forma de se aceder ao
                        conteúdo de variáveis, dentro do JSX */}
        <Tabela3 dadosAlunos={alunos} />
        <br />
      </div >
    );
  }
}

// um componente só é acessível se for 'exportado'
export default App;

