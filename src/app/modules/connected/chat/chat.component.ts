import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  message: string = '';

  @Input('channel') channel?: RTCDataChannel;
  @Input('items') items: any[] = [];
  @Output('itemsChange') itemsChange = new EventEmitter<any[]>();

  sendMessage() {
    if (this.message === '') {
      return alert('กรุณากรอกข้อความก่อนส่ง');
    }
    this.items.push({
      isMe: true,
      message: this.message,
    });
    this.itemsChange.emit(this.items);
    this.channel?.send(this.message);
    this.message = '';
  }
}
