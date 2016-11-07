import { Injectable }   from '@angular/core';
import {Http, Response}     from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";


import {Character} from "../models/character.model";

@Injectable()
export class CharacterService{
  private character: Character;

  constructor(private http: Http){

  }

  getCharacter(){
    return this.http.get('http://localhost:3000/character')
        .map((response: Response) => {
          const character = response.json().obj;
          return character;
        })
        .catch((error: Response) => Observable.throw(error.json()));
  }

  getDetails() {
      return this.character.details
  }

  editDetails(character: Character){
    const body = JSON.stringify(character);
  }


}