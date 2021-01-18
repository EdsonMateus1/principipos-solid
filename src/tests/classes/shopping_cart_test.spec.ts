import { ShoppingCard } from "../../classes/shopping_cart";
import { Discount } from "../../classes/discount";
import { CardItem } from "../../classes/interfaces/cart_item";

function createSut() {
  class DiscountMock extends Discount {}
  const discountMock = new DiscountMock();
  const sut = new ShoppingCard(discountMock);
  return {
    discountMock,
    sut,
  };
}

function createCartItem() {
  class ProductMock implements CardItem {
    constructor(public name: string, public price: number) {}
  }
  return new ProductMock("livro", 20);
}

describe("ShoppginCart", () => {
  it("o carrinho deve esta vazio", () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });
  it("deve ter dois itens no carrinho", () => {
    const { sut } = createSut();
    const item = createCartItem();
    const item2 = createCartItem();
    sut.addItem(item);
    sut.addItem(item2);
    expect(sut.qtdItems).toBe(2);
  });
});
