import { describe, it, expect } from 'vitest';
import { greet, sum } from './index.js';
 
describe('greet', () => {
  it('saluda con un nombre válido', () => {
    expect(greet('Ada')).toBe('Hello, Ada!');
  });
 
  it('hace trim de espacios', () => {
    expect(greet('  Linus  ')).toBe('Hello, Linus!');
  });
 
  it('falla con cadena vacía', () => {
    expect(() => greet('')).toThrow();
  });
 
  it('falla con entrada no-string', () => {
    expect(() => greet(42)).toThrow();
  });
});
 
describe('sum', () => {
  it('suma una lista de números', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });
 
  it('devuelve 0 para array vacío', () => {
    expect(sum([])).toBe(0);
  });
 
  it('falla si no es array', () => {
    expect(() => sum('hola')).toThrow(TypeError);
  });
});
