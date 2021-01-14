import { IMessaging } from "./interfaces/messaging";
export class Messaging implements IMessaging {
  sendMessage(msg: string): void {
    console.log(msg);
  }
}
