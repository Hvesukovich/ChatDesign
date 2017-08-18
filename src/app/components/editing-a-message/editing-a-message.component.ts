import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../../services/messages.service';

@Component({
    selector: 'app-editing-a-message',
    templateUrl: './editing-a-message.component.html',
    styleUrls: ['./editing-a-message.component.css']
})
export class EditingAMessageComponent implements OnInit {
    private message = "";

    constructor(private messagesService: MessagesService) {
    }

    ngOnInit() {
    }

    public sendMessage(message:string){
        if(message.trim()){
            const obj = this.messagesService.addMessage(message);
            setTimeout( () => {
                obj.sent = 1;
            }, 2000);
            this.message = "";
        }
    }

}
