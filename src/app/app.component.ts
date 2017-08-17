import {Component} from '@angular/core';
import {MessagesService} from "./services/messages.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private messagesService:MessagesService) {
        this.messageGet();
    }

    private messageGet() {
        this.messagesService.messageGet();
    }
}
