/* eslint-disable prettier/prettier */
import { Discount } from "./discount";
import { CardItem } from "./interfaces/cart_item";
import { IShoppingCard } from "./interfaces/shopping_card";

export class ShoppingCard implements IShoppingCard {
  _items: CardItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CardItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.slice(index, 1);
  }

  get items(): Readonly<CardItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWithDiCount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
