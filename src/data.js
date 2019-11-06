/* Manejo de data */
// esta es una función ade ejemplo
//example condition: {field: house, value: Gryffindor}
const filterData = (data, condition) => {
  let personajesFiltrados = [];
  if (condition === null) {
    personajesFiltrados = data;
  } else {
    personajesFiltrados = data.filter(function(personaje) {
      if (personaje[condition.field] === condition.value) {
        return true;
      } else {
        return false;
      }
    });
  }
  console.log(personajesFiltrados);
  return personajesFiltrados;
};



const sortData = (data, sortOrder) => {
  if (sortOrder === 'ascendente') {
    return data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  } else if (sortOrder === 'descendente') {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  } else {
    return data;
  }
};
// const reversed = sortData.reverse();


export {filterData, sortData}