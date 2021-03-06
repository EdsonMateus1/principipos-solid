/* eslint-disable prettier/prettier */
import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Product } from "./classes/product";
import { SaveOrder } from "./services/saveOrder";
import { ShoppingCard } from "./classes/shopping_cart";
import { Discount, FiftyPercentDiscount , TenPercentDiscount } from "./classes/discount";

const fiftydiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCard = new ShoppingCard(tenPercentDiscount);
const messaging = new Messaging();
const saveOrder = new SaveOrder();
const order = new Order(shoppingCard, messaging, saveOrder);
shoppingCard.addItem(new Product("livro", 20));
shoppingCard.addItem(new Product("caderno", 15));
shoppingCard.addItem(new Product("caneta", 2.5));
console.log(shoppingCard.total());
console.log(shoppingCard.totalWithDiCount());
console.log(shoppingCard.items);
order.checkout();
console.log(shoppingCard.items);
console.log(order.orderStatus);
