import { Component } from '@angular/core';

import { DetailsComponent }    from './components/char-details/details.component';
import { CharacterService }  from './services/character.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ CharacterService ]
})
export class AppComponent {
    
}