import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DriverService } from '../driver.service';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DriverTableComponent } from "../driver-table/driver-table.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-driver',
    standalone: true,
    templateUrl: './driver.component.html',
    styleUrl: './driver.component.css',
    imports: [CommonModule, NgFor, FormsModule, ReactiveFormsModule, DriverTableComponent, NavbarComponent,RouterOutlet]
})
export class DriverComponent implements OnInit {
  constructor(private driverservice: DriverService) {
    //  this.drivers=this.driverservice.drivers;
    // this.count=this.drivers.length;
    this.showdrivers()
  }
  driver:any={};

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

  showdrivers(){
    this.driverservice.getdrivers()
    .subscribe((data:any)=>{
      console.log(data)
      this.cdrivers=data
    })
  }

  savedriver(dri:any){
    console.log("savedriver")
    console.log(dri)
    this.driverservice.savedriver(dri)
    .subscribe((data:any)=>{
      //console.log(data)
      //this.employeeService.getemployees()
      this.showdrivers()

    }, err => console.log(err));
    ;
   }


   deletedriver(id:any){
    //console.log(this.newEmployee)
    //console.log(id)
    this.driverservice.deletedriver(id)
    .subscribe((data:any)=>{
      console.log(data)
      this.showdrivers()
      //this.employeeService.getemployees()
    }, err=> console.log(err));
   }
  //count:number=0

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    //this.cdrivers = this.driverservice.sdrivers;
    //this.count=this.cdrivers.length;
  }

  cdrivers!: any[];
  newDriver: any = {};

  driverForm = new FormGroup({
    DID: new FormControl('', Validators.required),
    DNAME: new FormControl('', [
      Validators.maxLength(20),
      Validators.minLength(3),
      Validators.required,
    ]),
    DPHONENO: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]),
  });
  //ngOnInIt():void{
  //this.drivers=this.driverservice.drivers;
  // this.count=this.drivers.length;
  //}

  onEnroll(event: any) {
    console.log(event);
  }

  onFormSubmit(driverForm: any) {
    let newDriverID = this.driverForm.get("DID")?.getRawValue();
    let newDriverNAME = this.driverForm.get("DNAME")?.getRawValue();
    let newDriverPHONENO = this.driverForm.get("DPHONENO")?.getRawValue();
    let newDriver= {
      //id: newDriverID,
      //route: { id: 1, name: 'MGR', location: 'BesantNagar' },
      name: newDriverNAME,
      phonenumber: newDriverPHONENO
    }
    console.log(newDriver);
    this.cdrivers.push(newDriver);

   // this.newDriver.id=undefined
    this.savedriver(newDriver)
    this.newDriver = {};
  }

  editDriver(driver: any) {}

  onReset(driverForm: any) {}

  updateName() {
    this.driverForm.controls['DID'].setValue('10');
    this.driverForm.controls['DNAME'].setValue('JAMES');
  }
}
