const perguntas = [
    {
        id: 1,
        enunciado: "Qual é o processo de crescimento da população urbana em relação à população rural?",
        re1: "Migração",
        re2: "Expansão agrícola",
        re3: "Revolução industrial",
        rc: "Urbanização",
    },
    {
        id: 2,
        enunciado: "O que é êxodo rural?",
        re1: "Migração de áreas urbanas para áreas rurais",
        re2: "Crescimento da população rural",
        re3: "Desenvolvimento industrial",
        rc: "Migração de áreas rurais para áreas urbanas",
    },
    {
        id: 3,
        enunciado: "Quais são os principais fatores que impulsionam a urbanização?",
        re1: "Agricultura tradicional",
        re2: "Tecnologias agrícolas",
        re3: "Manutenção de tradições rurais",
        rc: "Industrialização e modernização",
    },
    {
        id: 4,
        enunciado: "Qual é a definição de aglomeração urbana?",
        re1: "Áreas de grande produção agrícola",
        re2: "Cidades de pequeno porte",
        re3: "Concentração de atividades urbanas",
        rc: "Conjunto de cidades próximas que se interligam",
    },
    {
        id: 5,
        enunciado: "O que é o processo de suburbanização?",
        re1: "Desenvolvimento de atividades rurais",
        re2: "Crescimento populacional nas áreas centrais",
        re3: "Expansão das áreas urbanas em direção ao centro",
        rc: "Expansão das áreas urbanas para regiões periféricas",
    },
    {
        id: 6,
        enunciado: "Qual é a principal consequência da urbanização descontrolada?",
        re1: "Preservação do meio ambiente",
        re2: "Aumento da população rural",
        re3: "Expansão da agricultura",
        rc: "Problemas de infraestrutura e degradação ambiental",
    },
    {
        id: 7,
        enunciado: "O que são megacidades?",
        re1: "Cidades com baixa densidade populacional",
        re2: "Pequenas vilas rurais",
        re3: "Cidades médias em crescimento",
        rc: "Cidades com mais de 10 milhões de habitantes",
    },
    {
        id: 8,
        enunciado: "Quais são os desafios enfrentados pelas cidades no contexto da urbanização?",
        re1: "Baixa demanda por serviços",
        re2: "Falta de infraestrutura nas áreas rurais",
        re3: "Falta de indústrias e lojas",
        rc: "Trânsito congestionado, moradia precária e poluição",
    },
    {
        id: 9,
        enunciado: "O que é o processo de gentrificação?",
        re1: "Migração de áreas urbanas para áreas rurais",
        re2: "Expansão das áreas industriais",
        re3: "Transformação de praças públicas",
        rc: "Transformação de bairros em áreas de classe alta",
    },
    {
        id: 10,
        enunciado: "Qual é o termo utilizado para descrever o crescimento desordenado das cidades?",
        re1: "Desenvolvimento sustentável",
        re2: "Ruralização",
        re3: "Metropolização",
        rc: "Urbanização caótica",
    },
    {
        id: 11,
        enunciado: "O que é o processo de metropolização?",
        re1: "Redução da população urbana",
        re2: "Crescimento das áreas rurais",
        re3: "Aumento de quantidade de metrópoles",
        rc: "Concentração de população em regiões metropolitanas",
    },
    {
        id: 12,
        enunciado: "Quais são os principais problemas relacionados à falta de moradia nas cidades?",
        re1: "Excesso de habitações disponíveis",
        re2: "Bairros luxuosos de classe alta",
        re3: "Expansão das áreas urbanas para regiões periféricas",
        rc: "Favelização e falta de infraestrutura",
    },
    {
        id: 13,
        enunciado: "O que é a segregação urbana?",
        re1: "Integração harmoniosa entre diferentes grupos sociais",
        re2: "União de cidades com caracteristicas parecidas",
        re3: "Concentração de atividades rurais",
        rc: "Divisão de cidades em áreas socioeconômicas diferentes",
    },
    {
        id: 14,
        enunciado: "Quais são os efeitos da urbanização nos recursos naturais?",
        re1: "Redução do consumo de água",
        re2: "Aumento da paisagem urbana",
        re3: "Concentração de atividades urbanas",
        rc: "Poluição do ar e esgotamento dos recursos",
    },
    {
        id: 15,
        enunciado: "O que é um plano diretor urbano?",
        re1: "Um projeto para expandir atividades agrícolas",
        re2: "Fusão de áreas urbanas vizinhas",
        re3: "Um sistema de transporte coletivo que atende a população",
        rc: "conjunto de regras para o desenvolvimento e organização",
    },
    {
        id: 16,
        enunciado: "O que é a rede de transporte público?",
        re1: "Um sistema de transporte individual",
        re2: "Um sistema de transporte informal",
        re3: "Sistema de transporte para grupos especificos",
        rc: "Um sistema de transporte coletivo que atende a população",
    },
    {
        id: 17,
        enunciado: "Qual afirmativa está correta sobre os impactos culturais da urbanização?",
        re1: "Homogeneização cultural",
        re2: "Diminuição da população",
        re3: "Êxodo rural",
        rc: "Mistura e intercâmbio de diferentes culturas",
    },
    {
        id: 18,
        enunciado: "O que são cidades globais?",
        re1: "Cidades de pequeno porte",
        re2: "Cidades que exportam produtos",
        re3: "Cidades com mais de 10 milhões de habitantes",
        rc: "Cidades que desempenham papel central na economia global",
    },
    {
        id: 19,
        enunciado: "Quais são os efeitos da urbanização na saúde da população?",
        re1: "Baixo indice de problemas de saúde",
        re2: "Aumento de hospitais públicos",
        re3: "Aumento da expectativa de vida em áreas rurais",
        rc: "Aumento da poluição do ar e doenças respiratórias",
    },
    {
        id: 20,
        enunciado: "O que é o fenômeno da conurbação?",
        re1: "Expansão das áreas agrícolas",
        re2: "Fusão de áreas rurais em uma única região",
        re3: "Crescimento de cidades pequenas",
        rc: "Fusão de áreas urbanas vizinhas em uma única região",
    },
];


let contador_perguntas = 0;
let pergunta;

// tres corações de vida
let l1 = document.getElementById('l1')
let l2 = document.getElementById('l2')
let l3 = document.getElementById('l3')

let chp = 3;
let cp = 1;

let content = document.getElementById('content')
let quest = document.getElementById('quest')
let answer = document.getElementById('answer')
let ans = document.getElementById('ans')
let t2 = document.getElementById('title2')
let a_start = document.getElementById('a_start')
let title = document.getElementById('title')
let hp = document.getElementById('hp')
let header_title = document.getElementById('header-title')
let ranking_container = document.querySelector('.ranking');
let svg_container = document.querySelector('.svg-container');
let resp = [];


const sortearPergunta = () => {
    pergunta = perguntas[Math.floor(Math.random() * perguntas.length)]
}

const exibirPergunta = () => {

    if (content.classList.contains('popup')) {
        content.classList.remove('popup');
        void content.offsetWidth; // Isso força o navegador a recarregar a animação ao remover a classe
    }
    
    content.classList.add('popup');
    ranking_container.style.display='none';
    quest.classList.toggle('display-start')
    svg_container.classList.add('show');
    header_title.style.display='none'
    hp.style.display="flex"
    
    sortearPergunta()

    quest.innerHTML= `<h3 class="pergunta">`+pergunta.enunciado+`</h3>`
    const respostas = [pergunta.re1,
    pergunta.re2,
    pergunta.re3,
    pergunta.rc]
    respostas.sort();

    respostas.forEach((resposta, index) => {
        ans.innerHTML += `<li class="btn-r" onclick="checkAnswer(${index})">${resposta}</li>`;
    });
    

    title.style.display="block"
    title.innerHTML=`Questão: `+cp+``
    resp = respostas;
}

quest.innerHTML=`<button class="start" onclick="exibirPergunta()">Play</button>`
quest.classList.toggle('display-start')
ranking_container.style.display='flex';

const checkAnswer = (p) => {
    let correct = resp.indexOf(pergunta.rc)
    if(p == correct){
        window.alert('Parabéns! Você acertou!')
        contador_perguntas++
        cp++
        ans.innerHTML=''
        if(contador_perguntas !== perguntas.length){
        exibirPergunta()
        }else{
            svg_container.classList.remove('show');
            window.alert('Parabéns! Você concluiu o Quiz!')
            content.innerHTML=`<h3 class="pergunta">Registre seu nome:</h3>
            <input type="text" class="nome" placeholder="Digite seu nome:">
            <h3 class="pergunta">Pontuação: 10/10</h3>
            <button class="start" onclick="reset()">Voltar</button>`
        }
    }else{
        window.alert('Que pena! Você errou!')
        tiravida()
        chp--
        if(chp == 0){
            gameover()
        }
    }
}


const reset = () => {
    window.location.reload()
}


const gameover = () => {
    hp.style.display="none"
    content.innerHTML=`
    <h2 class="gameover" align="center">GAME OVER</h2>
    <button class="start" onclick="reset()">Reiniciar</button>`
}

let vida = [l1,l2,l3]

const tiravida = () => {
    vida[chp-1].style.display="none"
}
