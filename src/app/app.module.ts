import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ChatBodyComponent} from './components/chat-body/chat-body.component';
import {EditingAMessageComponent} from './components/editing-a-message/editing-a-message.component';
import {HttpModule} from '@angular/http';
import {MessagesService} from './services/messages.service';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ChatBodyComponent,
        EditingAMessageComponent
    ],
    imports: [
        MaterialModule,
        FormsModule,
        BrowserModule,
        HttpModule
    ],
    providers: [MessagesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
