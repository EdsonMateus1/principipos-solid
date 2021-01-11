/* eslint-disable prettier/prettier */

import { IMessaging } from "./interfaces/messaging";
export class Messaging implements IMessaging {
  sendMessage(msg: string): void {
    console.log("message sent" + msg);
  }
}
