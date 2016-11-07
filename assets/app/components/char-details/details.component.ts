import {Component, Input, OnInit} from '@angular/core';
import { NgForm}            from "@angular/forms";

import { CharacterService } from '../../services/character.service';
import { Character }        from '../../models/character.model';

@Component({
    selector: 'character-details',
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit{
  @Input() character: Character;
  details: any = {
      level: ""
  };


  constructor(private characterService: CharacterService){
      //
  }
  onSubmit(form: NgForm){
      //console.log(this.character);
  }

  ngOnInit(){
    this.characterService.getDetails()
  }  
}