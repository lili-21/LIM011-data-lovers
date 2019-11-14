// importamos la función `example`
import { sortData } from '../src/data.js';
import POTTER from '../src/data/potter/potter.js';

describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  });

  it('debería ... ascendente', () => {
    expect(sortData(POTTER, 'ascendente')[0].name).toBe('Argus Filch');
  });
});
