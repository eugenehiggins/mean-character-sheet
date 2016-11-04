import { Component } from '@angular/core';
import { NgForm}            from "@angular/forms";

import { CharacterService } from '../../services/character.service';
import { Character }        from '../../models/character.model';

@Component({
    selector: 'char-details',
    templateUrl: './details.component.html'
})
export class DetailsComponent {
  char: Character;

  constructor(private _charService: CharacterService){

  }
  onSubmit(form: NgForm){

  }

  ngOnInit(){
    // this._charService.getChar()
    // .subscribe(char => {
    //   this.char = char;
    // })
  }  
}