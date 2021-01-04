/* eslint-disable prettier/prettier */
type CardItemLegacy = { name: string; price: number };

export class ShoppingCardLegacy {
  private readonly _items: Array<CardItemLegacy> = [];

  addItem(item: CardItemLegacy): void {
    this._items.push(item);
  }
  removeItem(index: number): void {
    this._items.slice(index, 1);
  }
  get items(): Readonly<CardItemLegacy[]> {
    return this._items;
  }
  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }
  isEmpty(): boolean {
    return this._items.length === 0;
  }
  checkout(): void {
    if (this.isEmpty()) {
      console.log('carrinho vazio');
      return;
    }
    this.sendMessage('seu pedido foi recebido');
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('msg enviada', msg);
  }
  saveOrder(): void {
    console.log('salvo com suceso');
  }
  clear(): void {
    this._items.length = 0;
  }
}
const shoppingCard = new ShoppingCardLegacy();
shoppingCard.addItem({ name: 'caderno', price: 15 });
shoppingCard.addItem({ name: 'livro', price: 25 });
console.log(shoppingCard.items);
