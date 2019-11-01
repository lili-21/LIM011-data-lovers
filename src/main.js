
const btnEnter = document.getElementById('enter');
btnEnter.addEventListener('click', () => {
    document.getElementById('principal').classList.remove('hide');
    document.getElementById('home').classList.add('hide');
});

import POTTER from './data/potter/potter.js';
/*console.log(POTTER);*/
import {filterData, sortData} from './data.js';
console.log(filterData(POTTER, ""))
console.log(sortData(POTTER, ""))
//document.querySelector("#personajes-resumen").innerHTML = filterData(POTTER, "");



 


