import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatValue:any;
  chatMessage:any[]=[];
  constructor(private chat: ChatService) { }
  
  addValue() {
    this.chat.addMessage(this.chatValue);
  }
  getChatDetails(){
    this.chat.chatHistorySubject.subscribe((data:any)=>{
      this.chatMessage.push(data);
    });
    
  }
  ngOnInit(): void {
   
  }

}
