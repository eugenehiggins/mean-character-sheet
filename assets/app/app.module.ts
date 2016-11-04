import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from "./app.component";

import { DetailsComponent }  from './components/char-details/details.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}