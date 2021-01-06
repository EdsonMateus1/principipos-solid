/* eslint-disable prettier/prettier */
import { OrderSatus } from "./interfaces/order_status";
import { Messaging } from "../services/messaging";
import { SaveOrder } from "../services/saveOrder";
import { ShoppingCard } from "./shopping_cart";
export class Order {
  private _orderStatus: OrderSatus = "open";
  constructor(
    private readonly cart: ShoppingCard,
    private readonly messagin: Messaging,
    private readonly saveOrder: SaveOrder
  ) {}

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("carrinho vazio");
      return;
    }

    this._orderStatus = "closed";
    this.messagin.sendMessage(`seu pedido tem ${this.cart.totalWithDiCount()} de desconto`);
    this.saveOrder.saveOrder();
    this.cart.clear();
  }
  get orderStatus(): string {
    return this._orderStatus;
  }
}
