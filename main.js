import { filterData, sortData, computeStats } from './dataFunctions.js';

import { renderItems } from './view.js';

import data from './data/dataset.js';

//      renderiza os cards pelo root/html
const listaCards = document.querySelector('#root');
let dadosRenderizados = [...data]; // Variável para armazenar os dados renderizados

const mostraCards = (dados) => {
  listaCards.innerHTML = renderItems(dados);
};

mostraCards(dadosRenderizados);

//      filtro nacionalidade - mostrando opções - funcionando corretamente
const filtroNacionalidade = document.querySelector('filtroNacionalidade');
filtroNacionalidade.addEventListener('change', (event) => {
  const valorDoFiltro = event.target.value;
  const cardsFiltrados = filterData(data, 'nacionalidade', valorDoFiltro);
  dadosRenderizados = cardsFiltrados; // Atualiza os dados renderizados
  //celebridadesMostradas(dadosRenderizados); *****
  mostraCards(dadosRenderizados);
});

//      filtro ordem - mostrando opções - funcionando corretamente
const filtroOrdem = document.querySelector('filtroOrdem');
filtroOrdem.addEventListener('change', () => {
  const valorDaOrdem = filtroOrdem.value;
  dadosRenderizados = sortData(dadosRenderizados, 'name', valorDaOrdem); // Ordena os dados renderizados
  mostraCards(dadosRenderizados);
});

//      estatística - número total de cards renderizados
const celebridadeSpan = document.querySelector(".quantidadeCelebridades");
document.addEventListener("DOMContentLoaded", () => {
  celebridadesMostradas(data);
})

//      atualiza o número de celebridades mostradas
const celebridadesMostradas = (data) => {
  const numeroCelebridades = computeStats(data);
  celebridadeSpan.innerText = `${numeroCelebridades} celebridades.`;
}



//      botão de limpar / definindo valor índece zero
const limparSelecoes = document.querySelector('botaoLimpar');
limparSelecoes.addEventListener('click', () => {
  // // Define o valor selecionado como a primeira opção (índice 0)/ volta a configuração "inicial"
  filtroNacionalidade.selectedIndex = 0;
  filtroOrdem.selectedIndex = 0;

  // celebridadesMostradas (data);
  
  //      reinicia o span quantidade de celebridade
  //celebridadeSpan = celebridadesMostradas;
  
  //limpa e renderiza todos os cards, porém mantem a última configuração
  dadosRenderizados = data; // Reinicia os dados renderizados
  //listaCards.innerHTML = renderItems(data)
  mostraCards(dadosRenderizados);
});



//      implementações futuras:


//          modificar para pop-up
// let button = document.querySelector('#button');
// let msg = document.querySelector('#message');

// button.addEventListener('click', () => {
//     msg.classList.toggle('reveal');
// })

// target: elemento HTML com id='button'
// function: função anônima (arrow function) que configura o código necessário para revelar/ocultar a mensagem
// useCapture: deixado com o valor padrão de false

//usando o métoto addEventListener:
//object.addEventListener("mouseover", myScript);