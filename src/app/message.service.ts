import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
   const r = confirm("是否確認要清空所有內容");
    if (r == true) {
      this.messages = [];
    }
  }
}
