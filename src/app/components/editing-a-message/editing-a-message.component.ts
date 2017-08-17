import {Component, OnInit} from '@angular/core';
import {MdButtonModule} from '@angular/material';
import {FormsModule} from "@angular/forms";
import {MessagesService} from "../../services/messages.service";
import {$} from "protractor/built/index";

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

    private sendMessage(message:string){
        if(message.trim()){
            const obj = this.messagesService.addMessage(message);
            setTimeout( () => {
                obj.sent = 1;
            }, 2000);
            this.message = "";
        }
    }

}
