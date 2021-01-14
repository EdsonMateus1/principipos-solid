/* eslint-disable prettier/prettier */
import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Product } from "./classes/product";
import { SaveOrder } from "./services/saveOrder";
import { ShoppingCard } from "./classes/shopping_cart";
import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
} from "./classes/discount";
import {
  IndividualCustomerCorrect,
  IndividualCustomerPremium,
} from "./classes/customer";

const fiftydiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCard = new ShoppingCard(tenPercentDiscount);
const messaging = new Messaging();
const saveOrder = new SaveOrder();
const individualCustomer = new IndividualCustomerCorrect(
  "fulano",
  "de tal",
  "12312"
);
const individualCustomerPremium = new IndividualCustomerPremium(
  "edson",
  "mate",
  "12312",
  "5"
);
const order = new Order(shoppingCard, messaging, saveOrder, individualCustomerPremium);
shoppingCard.addItem(new Product("livro", 20));
shoppingCard.addItem(new Product("caderno", 15));
shoppingCard.addItem(new Product("caneta", 2.5));
console.log(order.getName());
console.log(shoppingCard.total());
console.log(shoppingCard.totalWithDiCount());
console.log(shoppingCard.items);
order.checkout();
console.log(shoppingCard.items);
console.log(order.orderStatus);
