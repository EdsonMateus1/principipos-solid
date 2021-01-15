describe("valores primitivos", () => {
  it("teste jest assertions", () => {
    const number = 10;
    expect(number).toBe(10); // objA === ObjB  false
    expect(number).toEqual(10);  // objA == ObjB  true
    expect(number).not.toBeNull();
    expect(number).toBeGreaterThan(9); //para ser maior que
    expect(number).toHaveProperty("toString"); // normalmente e feito um expect por teste
  });
});

describe("obejetos", () => {
  it("teste jest obejetos", () => {
    const person = {
      name: "luiz",
      age: 30,
    };
    const anoterPerson = { ...person };
    expect(person).toEqual(anoterPerson); // usado para chegar objetos // objA == ObjB  true
    expect(person).toHaveProperty("name" , "luiz");
    expect(person).not.toHaveProperty("lastName");
    expect(person.age).toBe(30);
  });
});
