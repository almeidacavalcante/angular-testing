import { compute } from "./compute";
describe('1 - Fundamentals', () => {
  beforeEach(() => {

  });

  it('Valores menores que zero devem retornar zero', () => {
      expect(compute(-2)).toEqual(0);
  });

  it('Teste para um número maior que zero deve receber +1', () => {
      expect(compute(1)).toEqual(2);
  });
});