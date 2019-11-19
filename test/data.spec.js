// importamos la función `example`
import { sortData, filterData } from '../src/data.js';
import POTTER from '../src/data/potter/potter.js';

const prueba = [
  {
    name: 'Harry Potter',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '31-07-1980',
    yearOfBirth: 1980,
    ancestry: 'half-blood',
    eyeColour: 'green',
    hairColour: 'black',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    },
    patronus: 'stag',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Daniel Radcliffe',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  },
  {
    name: 'Harry Potter',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '31-07-1980',
    yearOfBirth: 1980,
    ancestry: 'half-blood',
    eyeColour: 'green',
    hairColour: 'black',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    },
    patronus: 'stag',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Daniel Radcliffe',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  },
  {
    name: 'Hermione Granger',
    species: 'human',
    gender: 'female',
    house: 'Gryffindor',
    dateOfBirth: '19-09-1979',
    yearOfBirth: 1979,
    ancestry: 'muggleborn',
    eyeColour: 'brown',
    hairColour: 'brown',
    wand: {
      wood: 'vine',
      core: 'dragon heartstring',
      length: '',
    },
    patronus: 'otter',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Emma Watson',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
  },
  {
    name: 'Ron Weasley',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '01-03-1980',
    yearOfBirth: 1980,
    ancestry: 'pure-blood',
    eyeColour: 'blue',
    hairColour: 'red',
    wand: {
      wood: 'willow',
      core: 'unicorn tail-hair',
      length: 14,
    },
    patronus: 'Jack Russell terrier',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Rupert Grint',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/ron.jpg',
  },
];


describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  });
  it('debería ... potter', () => {
    expect(sortData(POTTER, ' ')[0].name).toBe('Harry Potter');
  });
  it('debería ... ascendente', () => {
    expect(sortData(POTTER, 'ascendente')[0].name).toBe('Argus Filch');
  });
  it('La lista ya esta ordenada ascendente', () => {
    expect(sortData(POTTER, 'ascendente')[0].name).toBe('Argus Filch');
  });
  it('debería ... descendente', () => {
    expect(sortData(POTTER, 'descendente')[0].name).toBe('Vincent Crabbe');
  });
  it('debería ... ', () => {
    expect(sortData(prueba, 'descendente')[0].name).toBe('Ron Weasley');
  });
  it('debería ... 0', () => {
    expect(sortData(prueba, 'ascendente')[0].name).toBe('Harry Potter');
  });
});

describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
  });
  it('debería traer todos los elementos', () => {
    expect(filterData(POTTER, null)).toHaveLength(POTTER.length);
  });
  it('debería ... Gryffindor', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Gryffindor' })[0].house).toBe('Gryffindor');
  });
  it('debería ... Hufflepuff', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Hufflepuff' })[0].house).toBe('Hufflepuff');
  });
  it('debería ... Slytherin', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Slytherin' })[0].house).toBe('Slytherin');
  });
  it('debería ... Ravenclaw', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Ravenclaw' })[0].house).toBe('Ravenclaw');
  });
  it('debería ... dragon', () => {
    expect(filterData(POTTER, { field: ['wand', 'core'], value: 'dragon heartstring' })[0].wand.core).toBe('dragon heartstring');
  });
  it('debería ... fenix', () => {
    expect(filterData(POTTER, { field: ['wand', 'core'], value: 'phoenix feather' })[0].wand.core).toBe('phoenix feather');
  });
  it('debería ... Unicornio', () => {
    expect(filterData(POTTER, { field: ['wand', 'core'], value: ('unicorn tail-hair', 'unicorn hair') })[0].wand.core).toBe(('unicorn tail-hair', 'unicorn hair'));
  });
  it('debería ... salvajes', () => {
    const listaSalvajes = ['stag', 'otter', 'swan', 'doe', 'hare', 'hare', 'wolf', 'weasel', 'cedar', 'lynx'];
    expect(listaSalvajes.includes(filterData(POTTER, { field: 'patronus', value: listaSalvajes })[0].patronus)).toBe(true);
  });
  it('debería ... domesticos', () => {
    const listaPatronus = ['Jack Russell terrier', 'tabby cat', 'persian cat', 'horse'];
    expect(listaPatronus.includes(filterData(POTTER, { field: 'patronus', value: listaPatronus })[0].patronus)).toBe(true);
  });
});
