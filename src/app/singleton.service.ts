import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {

  constructor() { }

  baseurl="http://localhost:8080/"
}
