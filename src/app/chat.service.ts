import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
export interface ChatMessage {
  sender: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {
   chatHistorySubject = new ReplaySubject<ChatMessage>(10);
  constructor() { }
  addMessage(chatValue :any) {
    this.chatHistorySubject.next(chatValue);
  }
  getChatHistory() {
    return this.chatHistorySubject.asObservable();
  }
}
