import POTTER from './data/potter/potter.js';
/*console.log(POTTER);*/
import {filterData, sortData} from './data.js';
console.log(filterData(POTTER, ""))
console.log(sortData(POTTER, ""))
document.querySelector("#list-character").innerHTML = filterData(POTTER, "personajesFiltrados");

const btnEnter = document.getElementById('enter');
btnEnter.addEventListener('click', () => {
  document.getElementById('principal').classList.remove('hide');
  document.getElementById('character').classList.remove('hide');
  document.getElementById('home').classList.add('hide');
});
const btnInicio = document.getElementById('inicio');
btnInicio.addEventListener('click', () => {
  document.getElementById('home').classList.remove('hide'); 
  document.getElementById('principal').classList.add('hide');
});
const selectElement = document.querySelector('#opciones-filtro');
selectElement.addEventListener('change', (event) => {
  if (event.target.value === 'casas') {
    document.getElementById('house').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
  } else if (event.target.value === 'varita') {
    document.getElementById('varita').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
  } else if (event.target.value === 'patronus') {
    document.getElementById('patronus').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
  }
});

const imgGryffindor = document.getElementById('gryffindor');
imgGryffindor.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('house').classList.add('hide');
});
const imgHufflepuff = document.getElementById('hufflepuff');
imgHufflepuff.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('house').classList.add('hide');
});
const imgSlytherin = document.getElementById('slytherin');
imgSlytherin.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('house').classList.add('hide');
});
const imgRavenclaw = document.getElementById('ravenclaw');
imgRavenclaw.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('house').classList.add('hide');
});
const imgDragon = document.getElementById('dragon');
imgDragon.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('varita').classList.add('hide');
});
const imgFenix = document.getElementById('fenix');
imgFenix.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('varita').classList.add('hide');
});
const imgUnicornio = document.getElementById('unicornio');
imgUnicornio.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('varita').classList.add('hide');
});
const imgsalvajes = document.getElementById('salvajes');
imgsalvajes.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('patronus').classList.add('hide');
});
const imgDomesticos = document.getElementById('domesticos');
imgDomesticos.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('patronus').classList.add('hide');
});


const btnAtras = document.getElementById('atras');
btnAtras.addEventListener('click', () => {
const filtro = document.getElementById('opciones-filtro');
const valorFiltro = filtro.options[filtro.selectedIndex].value;
  if (valorFiltro === 'casas') {
    document.getElementById('house').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
  } else if (valorFiltro === 'varita') {
    document.getElementById('varita').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
  } else if (valorFiltro === 'patronus') {
    document.getElementById('patronus').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
  }
});
