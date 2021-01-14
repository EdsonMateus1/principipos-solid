/* eslint-disable prettier/prettier */
import { CardItem } from './interfaces/cart_item';

export class Product implements CardItem {
  constructor(public name: string, public price: number) {}
}
