export const renderItems = (data) => {

  let result = '<ul>'
  
  data.forEach((element) => {
    result += `
    <li class = "cardsUnitarios">
    <img src= ${element.imageUrl} alt= "">
    <strong><p>${element.name}</strong></p>
    <strong><p>${element.shortDescription}</p></strong>
    <strong><p>Sobre:</strong> ${element.description}</p>
    <strong><p>Idade:</strong> ${element.facts.idade}</p>
    <strong><p>Nacionalidade:</strong> ${element.facts.nacionalidade}</p>
    <strong><p>Área de atuação:</strong> ${element.facts.areaDeAtuacao}</p>
    <strong><p>Trabalho mais relevante:</strong> ${element.facts.trabalhoMaisRelevante}</p>
    <strong><p>Escândalo:</strong> ${element.facts.escandalo}</p>
    <strong><p>Curiosidade:</strong> ${element.facts.curiosidade}</p>
    </li>
    `;
  })
  result = result + '</ul>'
  return result
}

//      implementações futuras:
// colocar "itemtype" na li
// inserir "itemprop" na li