import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormsModule} from '@angular/forms';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-employee',
    standalone: true,
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.css',
    imports: [CommonModule, NgFor, FormsModule, EmployeeCardComponent, EmployeeComponent, NavbarComponent,RouterOutlet]
})
export class EmployeeComponent {

     showH2tag=true;
employee: any;
     constructor(private employeeService:EmployeeService){

      this.showemployees()
     }

     allRoutes=[
      {
          "id": 1,
          "name": "MGR",
          "location": "BesantNagar"
      },
      {
          "id": 2,
          "name": "Shivaji",
          "location": "AnnaNagar"
      },
      {
          "id": 3,
          "name": "Vijay",
          "location": "ShenoyNagar"
      },
      {
          "id": 4,
          "name": "Ajith",
          "location": "GrandNagar"
      },
      {
          "id": 5,
          "name": "Sethu",
          "location": "MahanNagar"
      },
      {
          "id": 6,
          "name": "Lokesh",
          "location": null
      },
      {
          "id": 8,
          "name": "Shiva",
          "location": "RayNagar"
      },
      {
          "id": 9,
          "name": "Vishnu",
          "location": "RamNagar"
      },
      {
          "id": 10,
          "name": "Rake",
          "location": "TylerRo"
      },
      {
          "id": 11,
          "name": "Tyson",
          "location": "Shibuya"
      }
    ]


     showemployees(){
      this.employeeService.getemployees()
      .subscribe((data:any)=>{
        console.log(data);
        this.employees=data;
      });
     }

     saveemployee(emp:any){
      console.log(emp)
      this.employeeService.saveemployee(emp)
      .subscribe((data:any)=>{
        //console.log(data)
        //this.employeeService.getemployees()
        this.showemployees()

      }, err => console.log(err));
      ;
     }

     deleteemployee(id:any){
      //console.log(this.newEmployee)
      //console.log(id)
      this.employeeService.deleteemployee(id)
      .subscribe((data:any)=>{
        console.log(data)
        this.showemployees()
        //this.employeeService.getemployees()
      }, err=> console.log(err));
     }

     employees!: any[];
     id!:any[];
     employeeForm!:any[];
     newEmployee:any ={};

     ngOnInit():void{
      //this.employees=this.employeeService.employees;
     }

     onEnroll(event:any){
      console.log(event);
  }


     onFormSubmit(employeeForm:any){
      console.log(employeeForm);
      // this.newEmployee.name=0;
      // this.newEmployee.id=0;
      // this.newEmployee.phonenumber=0;
      // this.newEmployee.enabled=true;
      //this.newEmployee.push(this.newEmployee);
      //this.employees.push(this.saveemployee);
      this.newEmployee.id=undefined
      this.saveemployee(this.newEmployee)
      //this.saveemployee(this.allRoutes);
      this.newEmployee={};
    }

    editCourse(course:any){

    }

















}
