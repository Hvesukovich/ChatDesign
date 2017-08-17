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
    private id:string;
    private name:string;
    private login:string;
    private message:string;
    private date:string;
    private spinner = false;
    private textarea = document.getElementById("message_text");


    constructor(private messagesService: MessagesService) {
    }

    ngOnInit() {
    }

    private sendMessage(message:string){
        this.spinner = true;
        this.message = "";
        const obj = this.messagesService.addMessage(message);
        setTimeout( () => {
            obj.sent = 1;
        }, 2000);
    }
    // private onNameChange($event){
    //         alert($event);
    // }

    onEnter(){
        alert('работает');
    }
    

}
