import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  lowerCase(value:string){
    return value.toLowerCase();
  }

}
