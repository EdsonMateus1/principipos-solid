import { Product } from "../../classes/product";

const createSut = function (name: string, price: number): Product {
  return new Product(name, price);
};

describe("Product", () => {
  afterEach(() => jest.clearAllMocks());
  it("deve ser criada com as propriedades que foram passadas", () => {
    const sut = createSut("camiseta", 49.9);
    expect(sut).toHaveProperty("name","camiseta"); 
    // toHaveProperty usando para testar se a  propriedades existe e 
    //seus valores sao iguais ao passado
    expect(sut).toHaveProperty("price",49.9);
  });
});
