import { data } from './data.js' // Importa os dados dos atletas de um arquivo externo

let dados = data // Armazena os dados importados em uma variável local para facilitar o acesso

let pesquisa = document.querySelector('.button') // Seleciona o botão de pesquisa e adiciona um ouvinte de evento para quando ele for clicado

let pesquisaButton = document.querySelector('.buttons') // Seleciona o botão de pesquisa e adiciona um ouvinte de evento para quando ele for clicado

pesquisa.addEventListener('click', () =>{

    let fieldSearch = document.querySelector('#campo-pesquisa').value // Obtém o termo de pesquisa digitado pelo usuário 
    let section = document.querySelector('#resultado-pesquisa') // Pega o ID do input da sessão de pesquisa

    // Retorna para a home da aplicação ao clicar no link da mensagem de erro
    function backHome(){
        window.location = 'index.html'
    }

    // Caso não seja inserido nenhum valor, retorne na tela uma msg de erro 
    if(!fieldSearch){

        // Monta o conteúdo html dentro da tag section
        section.innerHTML = `
        <div class="container-intro">
            <h2>Sem resultados!<br>Procure por uma profissão.</h2>
            <p><a onclick="${backHome}" href="">Voltar</a></p>
        </div>
        ` 
        console.error('Usuário não digitou nenhum termo na caixa de busca', fieldSearch) // [Debug]
    }else {
        let resultado = ""

        /*A pesquisa é feita de forma case-insensitive (ignorando maiúsculas e minúsculas)*/
        for(let carreira of dados){
            if( carreira.titulo.toLowerCase().includes(fieldSearch.toLowerCase())|| carreira.descricao.toLowerCase().includes(fieldSearch.toLowerCase())){
                resultado +=`
                <div class="item-resultado">
                    <div class="container-imagem-carreira">
                     <!--<img src="${carreira.image}" alt="${carreira.descricaoImagem}" class="image-atleta" />-->
                    </div>
                    <div class="container-descricao-carreira">
                        <h2><a href=${carreira.link} target="_blank"class="">${carreira.titulo}</a></h2>
                        <h3>Descrição da área</h3>
                        <p class="">${carreira.descricao}</p>
                        <h3>Tempo mínimo de formação</h3>
                        <p class="">${carreira.tempoFormacao}</p>
                        <h3>Demanda de mercado</h3>
                        <p class="">${carreira.demandaMercado}</p>
                        <a href="${carreira.link}" target="_blank">Saiba Mais</a>
                    </div>
                </div>
                `
            }
        }

        // Retorne na tela o termo que foi pesquisado + uma msg no console
        section.innerHTML = `${resultado}`
        //console.log(fieldSearch)// [Debug] - Retorne no console, o termo que foi digitado no campo de busca

        if(!resultado){
            section.innerHTML =`
            <h2>O termo <u>${fieldSearch}</u> não foi encontrado!</h2>
            <p><a onclick="${backHome}" href="">Voltar</a></p>
            `
        }
    }
})

pesquisaButton.addEventListener('click', () =>{

    let selectButton = document.querySelector('.buttons') // Obtém o termo de pesquisa digitado pelo usuário 
    let section = document.querySelector('#resultado-pesquisa') // Pega o ID do input da sessão de pesquisa

    // Retorna para a home da aplicação ao clicar no link da mensagem de erro
    function backHome(){
        window.location = 'index.html'
    }

    // Caso não seja inserido nenhum valor, retorne na tela uma msg de erro 
    if(!selectButton){

        // Monta o conteúdo html dentro da tag section
        section.innerHTML = `
        <div class="container-intro">
            <h2>Sem resultados!<br>Procure por uma profissão.</h2>
            <p><a onclick="${backHome}" href="">Voltar</a></p>
        </div>
        ` 
        console.error('Usuário não digitou nenhum termo na caixa de busca', selectButton) // [Debug]
    }else {
        let resultado = ""

        /*A pesquisa é feita de forma case-insensitive (ignorando maiúsculas e minúsculas)*/
        for(let carreira of dados){
            if( "análise-de-dados".toLowerCase().includes("análise-de-dados".toLowerCase())){
                resultado +=`
                <div class="item-resultado">
                    <div class="container-imagem-carreira">
                     <!--<img src="${carreira.image}" alt="${carreira.descricaoImagem}" class="image-atleta" />-->
                    </div>
                    <div class="container-descricao-carreira">
                        <h2><a href=${carreira.link} target="_blank"class="">${carreira.titulo}</a></h2>
                        <h3>Descrição da área</h3>
                        <p class="">${carreira.descricao}</p>
                        <h3>Tempo mínimo de formação</h3>
                        <p class="">${carreira.tempoFormacao}</p>
                        <h3>Demanda de mercado</h3>
                        <p class="">${carreira.demandaMercado}</p>
                        <a href="${carreira.link}" target="_blank">Saiba Mais</a>
                    </div>
                </div>
                `
            }
        }

        // Retorne na tela o termo que foi pesquisado + uma msg no console
        section.innerHTML = `${resultado}`
        //console.log(fieldSearch)// [Debug] - Retorne no console, o termo que foi digitado no campo de busca

        if(!resultado){
            section.innerHTML =`
            <h2>O termo <u>Análise de dados</u> não foi encontrado!</h2>
            <p><a onclick="${backHome}" href="">Voltar</a></p>
            `
        }
    }
})