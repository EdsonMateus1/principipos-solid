/* eslint-disable prettier/prettier */
import { CardItem } from './interfaces/cart_item';

export class ShoppingCard {
  private readonly _items: Array<CardItem> = [];

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
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}

