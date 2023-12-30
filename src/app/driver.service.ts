import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SingletonService } from './singleton.service';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  sdrivers!: any[];

  //public drivers: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor( private http:HttpClient, private singletonservice:SingletonService){}

  driverurl=this.singletonservice.baseurl +"Driver"

  getdrivers(){
    return this.http.get(this.driverurl);
  }

  savedriver(dri:any){
    return this.http.post(this.driverurl,dri)


}

deletedriver(id:any){
  console.log(`${this.driverurl}/Delete/${id}`)
  return this.http.get(`${this.driverurl}/Delete/${id}`)

}
handleError(): (err: any, caught: import("rxjs").Observable<Object>) => import("rxjs").ObservableInput<any> {
 throw new Error('Method not implemented.');
}





}
