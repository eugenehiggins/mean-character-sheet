import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";

import { DetailsComponent }  from './components/char-details/details.component';
import {CharacterService} from "./services/character.service";

@NgModule({
    declarations: [
        AppComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
      CharacterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}