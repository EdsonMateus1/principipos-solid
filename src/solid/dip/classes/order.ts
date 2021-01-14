/* eslint-disable prettier/prettier */
import { OrderStatus } from "./interfaces/order_status";
import { CustomerOrder } from "./interfaces/customer_protocol";
import { IShoppingCard } from "./interfaces/shopping_card";
import { IMessaging } from "../services/interfaces/messaging";
import { ISaveOrder } from "../services/interfaces/saveOrder";
export class Order {
  private _orderStatus: OrderStatus = "open";
  constructor(
    //aplicando o principio dpi pois estou dependo de uma
    //abstracao ou interface o que diminui
    private readonly cart: IShoppingCard,
    private readonly messaging: IMessaging,
    private readonly saveOrder: ISaveOrder,
    private readonly customer: CustomerOrder
  ) {}

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("carrinho vazio");
      return;
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage(
      `seu pedido tem ${this.cart.totalWithDiCount()} de desconto`
    );
    this.saveOrder.saveOrder();
    this.cart.clear();
  }
  get orderStatus(): string {
    return this._orderStatus;
  }
  getName(): string {
    return this.customer.getName();
  }
}
