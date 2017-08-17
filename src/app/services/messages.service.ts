import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from "@angular/http";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class MessagesService {
    public messages;

    constructor(private http:Http) {
    }

    public messageGet() {
        this.http.get('http://localhost:4200/assets/messages.json').subscribe((data) => {
            const messages = data.json().messages;
            this.messages = messages;
            console.log(messages);
        }, error => {
            console.log(error);
        });
    }

    public  addMessage(message){
        // let  date = new Date();
        let date = new Date().toLocaleDateString();
        date += " "  + new Date().toLocaleTimeString();
        // let date = new Date();
        // let year = date.getUTCFullYear();
        // let letMonth = date.getUTCMonth();
        // let letMonth = date.getUTCMonth();
        // let day = date.getUTCDate();
        // let hour = date.getHours();
        // let hour = date.getUTCHours();
        // let minutes = date.getUTCMinutes();
        // let seconds = date.getUTCSeconds();
        let obj = {
            "id": '1',
            "name": "Я",
            "login": "LoginЯ",
            "message": message,
            // "date": day + "/" + letMonth + "/" + year + " " + hour + ":" + minutes
            "date": date,
            "sent": 0
            // "date": Date()
        };
        this.messages.push(obj);
        
        return obj;
    }


}
