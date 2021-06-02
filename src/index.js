// index.js
//**************************************************** */

// biblioteca para o funcionamento do React
import React from 'react';
// biblioteca para o manipulamento do DOM
import ReactDOM from 'react-dom';

// importa o CSS para dentro do projeto
import './index.css';

// identificação do código do componente que será a 'raiz' da aplicação
import App from './App';

// invocação do que deve ser atualizado na interface
ReactDOM.render(
  <React.StrictMode> {/* StrictMode - identifica potenciais problemas na aplicação.
                         Apenas funciona em modo Desenvolvimento  */}
    <App /> {/*estamos a invocar o 'componente' App para ser executado no browser*/}
  </React.StrictMode>,
  document.getElementById('root') // referencia o elemento HTML que deve receber conteúdo do 'componente'
  // a forma de escrever comentários muda conforme o contexto...
);


