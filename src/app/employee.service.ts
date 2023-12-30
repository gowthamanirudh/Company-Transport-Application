import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingletonService } from './singleton.service';
import { catchError, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http:HttpClient, private singletonservice:SingletonService) {}

  employeeurl=this.singletonservice.baseurl +"Employee"

  getemployees(){
    return this.http.get(this.employeeurl);
  }

  saveemployee(emp:any){
    return this.http.post(this.employeeurl,emp)
    // .pipe(
    //   catchError(this.handleError(saveemployee))
    // );
  }


  deleteemployee(id:any){
     //const baseurl = `${this.employeeurl}/${name}`;
     //console.log(baseurl)
     console.log(`${this.employeeurl}/Delete/${id}`)
     return this.http.get(`${this.employeeurl}/Delete/${id}`)

  }
  handleError(): (err: any, caught: import("rxjs").Observable<Object>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }







}
