//esta função recebe a matriz de dados para renderizar os
//elementos de cada item e deve retornar um elemento DOM ou uma string de HTML.

import { filterData, sortData, computeStats } from '../src/dataFunctions.js';
import { data as fakeData, mockAscendente, mockDescendente} from './data.js';


describe ('testes da função filterData', () => {

  it('deve retornar 3 celebridades quando o usuário escolher brasileira', () => {
    const dadosFiltrados = filterData(fakeData, 'nacionalidade', 'Brasileira');
    expect(dadosFiltrados.length).toBe(3);
  });

  it('deve retornar 0 celebridades quando o usuário escolher cubana', () => {
    const dadosFiltrados = filterData(fakeData, 'nacionalidade', 'Cubana');
    expect(dadosFiltrados.length).toBe(0);
  });
});

describe('testes da função sortData', () => {
  escolherOrdem

  it('deve retornar a lista em ordem crescente', () => {
    const dadosOrdenados = sortData(fakeData, 'name', 'asc')
    expect(dadosOrdenados()).toStrictEqual(mockAscendente);
  });

  it('deve retornar a lista em ordem decrescente', () => {
    const dadosOrdenados = sortData(fakeData, 'name', 'desc')
    expect(dadosOrdenados()).toStrictEqual(mockDescendente);
  });
});

describe('testes da função computeStats', () => {

  it('deve retornar a quantidade de celebridades da lista', () => {
    const stats = [...fakeData].map(item => item.facts).filter(value => !isNaN(value));
    //cria um novo array stats que contém apenas os valores facts
    //do array fakeData que podem ser convertidos em números
    const count = stats.reduce((accumulator) => accumulator + 1, 0);
    //calcula a quantidade de itens no array stats usando o
    //método reduce.
    expect(count).toBe(computeStats(fakeData));
    //verifica se a variável count é igual ao valor retornado
    //pela função computeStats quando o array fakeData é 
    //passado como argumento
  })
  });
