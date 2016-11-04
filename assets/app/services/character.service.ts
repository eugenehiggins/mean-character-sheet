import { Injectable }   from '@angular/core';
import { Http }     from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService{

  constructor(private _http: Http){

  }

  getChar(){
    // return this._http.get('/char')
    //   .map(res => res.json());
  }
}