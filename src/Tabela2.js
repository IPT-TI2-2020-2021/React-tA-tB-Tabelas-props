// Tabela2.js
// ****************************************************** 

import React from 'react'

// função que devolve o Cabeçalho da tabela
function CabecalhoTabela() {
    return (
        <thead>
            <tr>
                <td>Nome</td>
                <td>Apelido</td>
            </tr>
        </thead>
    )
}

// definição da função que devolve o Corpo da tabela
// faz exatamente o mesmo da linha 7
const CorpoTabela = () => {
    return (
        <tbody>
            <tr>
                <td>João</td>
                <td>Lopes</td>
            </tr>
            <tr>
                <td>Mário</td>
                <td>Santos</td>
            </tr>
            <tr>
                <td>Ana</td>
                <td>Silva</td>
            </tr>
        </tbody>
    )
}

// componente que junta os dois sub-componentes, formando um novo 'componente'
class Tabela2 extends React.Component {
    render() {
        return (
            <table className="table table-hover table-bordered">
                <CabecalhoTabela />
                <CorpoTabela />
            </table>
        )
    }
}


export default Tabela2

