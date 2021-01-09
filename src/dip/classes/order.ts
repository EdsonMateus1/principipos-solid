/* eslint-disable prettier/prettier */
import { OrderSatus } from "./interfaces/order_status";
import { Messaging } from "../services/messaging";
import { SaveOrder } from "../services/saveOrder";
import { ShoppingCard } from "./shopping_cart";
import { CustumerOrder } from "./interfaces/customer_protocol";
export class Order {
  private _orderStatus: OrderSatus = "open";
  constructor(
    private readonly cart: ShoppingCard,
    private readonly messagin: Messaging,
    private readonly saveOrder: SaveOrder,
    //aplicando o principio pois estou dependo de uma
    //abstracao ou interface o que diminui o acoplamento no codigo
    private readonly custumer: CustumerOrder
  ) {}

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("carrinho vazio");
      return;
    }

    this._orderStatus = "closed";
    this.messagin.sendMessage(
      `seu pedido tem ${this.cart.totalWithDiCount()} de desconto`
    );
    this.saveOrder.saveOrder();
    this.cart.clear();
  }
  get orderStatus(): string {
    return this._orderStatus;
  }
  getName(): string {
    return this.custumer.getName();
  }
}
