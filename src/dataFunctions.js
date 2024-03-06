// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//      fitro nacionalidade - funcionando
//dados - filtro - valor
export const filterData = (data, filterBy, value) => {
  const dadosFiltrados = data.filter(
    (artista) => artista.facts[filterBy] === value
  );
  return dadosFiltrados;
};


//      fitro ordem - funcionando
// // dados - ordenação - tipo asc/desc
export const sortData = (data, sortBy, sortOrder) => {
  //a função aceita três parametros - matriz, criterio e ordem da classificação
  return data.sort((a, b) => {
    //faz a comparação
    if (sortOrder === 'asc') {
      return a[sortBy].localeCompare(b[sortBy]);
      //localeCompare - compara os valores de sortBy em 'a e b' e retorna o valor da ordem relativa dos elementos
    } else if (sortOrder === 'desc') {
      return b[sortBy].localeCompare(a[sortBy]);
      //compara e retorna o inverso
    }
  });
};


// // cálculos estatísticos básicos
//esta função deve usar o método reduce.
export const computeStats = (data) => {
  const stats = data.map(item => item.facts).filter(value => !isNaN(value));
  const count = stats.reduce((accumulator) => accumulator + 1, 0);
  return count;
};