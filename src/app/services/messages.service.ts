import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MessagesService {
    public messages;

    constructor(private http: Http) {
    }

    public messageGet() {
        this.http.get('http://localhost:4200/assets/messages.json').subscribe((data) => {
            this.messages = data.json().messages;
        }, error => {
            console.log(error);
        });
    }

    public  addMessage(message) {
        let date = new Date().toLocaleDateString();
        date += ' ' + new Date().toLocaleTimeString();
        const obj = {
            id: '1',
            name: 'I',
            login: 'Login',
            message: message,
            date: date,
            sent: 0,
            sender: 'me'
        };
        this.messages.push(obj);
        return obj;
    }


}
