import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebsocketClient';

  private webSocket: WebSocket | undefined;
  stock: any = {};

  constructor() {
      }

  connectWs(){
    this.webSocket = new WebSocket('ws://localhost:8080/stocks');
    this.webSocket.onmessage = (event: MessageEvent) => {
      this.stock = JSON.parse(event.data);
    }
  }
}
