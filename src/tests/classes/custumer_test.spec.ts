import { IndividualCustomerCorrect , IndividualCustomerPremium} from "../../classes/customer";

describe("custumer", () => {
  it("a intancia deve ser criada com as propriedades que foram passadas IndividualCustomerCorrect", () => {
    const sut = new IndividualCustomerCorrect("edson", "mateus", "12312");
    expect(sut).toHaveProperty("firsName", "edson");
    expect(sut).toHaveProperty("lastName", "mateus");
    expect(sut).toHaveProperty("cpf", "12312");
  });
  it("a intancia deve ser criada com as propriedades que foram passadas IndividualCustomerPremium", () => {
    const sut = new IndividualCustomerPremium("edson", "mateus", "12312" , "5");
    expect(sut).toHaveProperty("firsName", "edson");
    expect(sut).toHaveProperty("lastName", "mateus");
    expect(sut).toHaveProperty("cpf", "12312");
    expect(sut).toHaveProperty("star", "5");
  });
});
