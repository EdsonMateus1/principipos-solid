it("descricao do (it)", () => {
  const number = 1;
  expect(number).toBe(1);
  expect(number).not.toBe(2);
});

test("descricao do teste", () => {
  const nome = "luiz";
  expect(nome).toBe("luiz");
  expect(nome).not.toBe("edson");
});

describe("grupo de teste", () => {
  it("deveria retonar 1 e nao pode retonar 2", () => {
    const number = 1;
    expect(number).toBe(1);
    expect(number).not.toBe(2);
  });
  test("deveria retonar luiz e nao pode retonar edson", () => {
    const nome = "luiz";
    expect(nome).toBe("luiz");
    expect(nome).not.toBe("edson");
  });
});
