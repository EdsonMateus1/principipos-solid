import { CardItem } from "./cart_item";

export abstract class IShoppingCard {
  abstract readonly _items: Array<CardItem>;
  abstract totalWithDiCount(): number;
  abstract isEmpty(): boolean;
  abstract clear(): void;
  abstract total(): number;
  abstract get items(): Readonly<CardItem[]>;
  abstract removeItem(index: number): void;
  abstract addItem(item: CardItem): void;
}
