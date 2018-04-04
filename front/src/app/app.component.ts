import { Component } from '@angular/core';
import { MessageService } from './messages/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SNCF Network Manager';

  constructor(private messageService: MessageService) {

  }
}
