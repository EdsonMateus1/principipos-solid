import { Messaging } from "../../services/messaging";

describe("Messaging", () => {
  afterEach(() => jest.clearAllMocks()); // limpa os mocks de teste
  it("deve retornar undefined", () => {
    const sut = new Messaging();
    expect(
      sut.sendMessage("mensagem exemplo confimando a compra")
    ).toBeUndefined();
  });
  it("deve printar na tela uma mensagem do tipo string", () => {
    const sut = new Messaging();
    const consoleSpy = jest.spyOn(console, "log"); // jest.spyOn observar um objeto , nesse caso o obj cosole e o metodo log
    sut.sendMessage("mensagem exemplo confimando a compra");
    expect(consoleSpy).toHaveBeenCalledWith(
      "mensagem exemplo confimando a compra"
    ); // ter sido chamado com
  });
  it("metodo console.log deve ser chamando uma unica vez", () => {
    const sut = new Messaging();
    const consoleSpy = jest.spyOn(console, "log");
    sut.sendMessage("mensagem exemplo confimando a compra");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
