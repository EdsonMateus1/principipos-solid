import {
  NoDiscount,
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
} from "../../classes/discount";

const createSut = function (className: new () => Discount): Discount {
  return new className();
};

describe("Discount", () => {
  it("nao tem desconto", () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10)).toBeCloseTo(10);
  });
  it("50% de desconto", () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(5);
  });
  it("10% de desconto", () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
