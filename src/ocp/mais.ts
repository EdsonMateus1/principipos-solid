/* eslint-disable prettier/prettier */
import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Product } from './entities/product';
import { SaveOrder } from './services/saveOrder';
import { ShoppingCard } from './entities/shopping_cart';

const shoppingCard = new ShoppingCard();
const messaging = new Messaging();
const saveOrder = new SaveOrder();
const order = new Order(shoppingCard, messaging, saveOrder);
shoppingCard.addItem(new Product('livro', 20));
shoppingCard.addItem(new Product('caderno', 15));
shoppingCard.addItem(new Product('caneta', 2.50));
order.checkout();
console.log(shoppingCard.items);
