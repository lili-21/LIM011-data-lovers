/* Manejo de data */
// esta es una función ade ejemplo
// example condition: {field: house, value: Gryffindor} HOUSES
// example condition: {field: patronus, value: ['aaa', 'stag']}  PATRONUS
// example condition: {field: ['wand', 'core'], value: ['aaa', 'stag']}  WAND
const filterData = (data, condition) => {
  let personajesFiltrados = [];
  if (condition === null) {
    personajesFiltrados = data;
  } else {
    personajesFiltrados = data.filter((personaje) => {
      let campoAFiltrar;
      if (Array.isArray(condition.field)) {
        campoAFiltrar = personaje[condition.field[0]][condition.field[1]];
      } else {
        campoAFiltrar = personaje[condition.field];
      }
      if (Array.isArray(condition.value)) {
        if (condition.value.includes(campoAFiltrar)) {
          return true;
        }
      }
      if (campoAFiltrar === condition.value) {
        return true;
      }
      return false;
    });
  }
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
      return 0;
    });
  } if (sortOrder === 'descendente') {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      } if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
  return data;
};
export { filterData, sortData };
