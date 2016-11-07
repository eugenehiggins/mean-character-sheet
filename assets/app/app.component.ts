import {Component, OnInit} from '@angular/core';

import { DetailsComponent }    from './components/char-details/details.component';
import { CharacterService }  from './services/character.service';
import {Character} from "./models/character.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ CharacterService ]
})
export class AppComponent implements OnInit {
    character: Character;

    constructor(private characterService: CharacterService) {}

    ngOnInit(){
        this.characterService.getCharacter()
            .subscribe(
                (character: Character) => {
                    this.character = character;
                    console.log(this.character.name)
                }
            )
    }
}