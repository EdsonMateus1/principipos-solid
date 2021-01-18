import { CardItem } from "./cart_item";

export abstract class IShoppingCard {
  abstract totalWithDiCount(): number;
  abstract isEmpty(): boolean;
  abstract clear(): void;
  abstract total(): number;
  abstract get items(): Readonly<CardItem[]>;
  abstract removeItem(index: number): void;
  abstract addItem(item: CardItem): void;
}
