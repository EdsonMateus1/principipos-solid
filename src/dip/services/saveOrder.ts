import { ISaveOrder } from "./interfaces/saveOrder";
export class SaveOrder  implements ISaveOrder {
  saveOrder(): void {
    console.log('pedido salvo no carrinho');
  }
}
