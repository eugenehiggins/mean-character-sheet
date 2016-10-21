import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";

import { DetailsComponent }  from './components/char-details/details.component';

@NgModule({
    declarations: [
        AppComponent,
        DetailsComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}