import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ChatBodyComponent} from './components/chat-body/chat-body.component';
import {EditingAMessageComponent} from './components/editing-a-message/editing-a-message.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {MessagesService} from "./services/messages.service";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ChatBodyComponent,
        EditingAMessageComponent
    ],
    imports: [
        // BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [MessagesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
