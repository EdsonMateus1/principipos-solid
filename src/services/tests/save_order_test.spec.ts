import { SaveOrder } from "../saveOrder";

describe("SaveOrder", () => {
  afterEach(() => jest.clearAllMocks()); // limpa os mocks de teste

  it("deve retornar undefined", () => {
    // sut  (sistem under teste)
    const sut = new SaveOrder();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it("deve chamar console.log uma vez", () => {
    // sut  (sistem under teste)
    const sut = new SaveOrder();
    const consoleSpy = jest.spyOn(console, "log"); // jest.spyOn observar um objeto , nesse caso o obj cosole e o metodo log
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("deve chamar console.log uma vez com esse valor 'pedido salvo no carrinho' ", () => {
    const sut = new SaveOrder();
    const consoleSpy = jest.spyOn(console, "log");
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith("pedido salvo no carrinho");
  });
});
