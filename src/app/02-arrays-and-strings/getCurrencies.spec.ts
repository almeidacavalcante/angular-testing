import { getCurrencies } from "./getCurrencies";

describe('TodoFormComponent', () => {


  beforeEach(() => {

  });

  it('Testa se os retornos são válidos USD, AUD ou EUR', () => {
      expect(getCurrencies()).toContain("AUD");
      expect(getCurrencies()).toContain("USD");
      expect(getCurrencies()).toContain("EUR");
  });

  it('', () => {
  });
});