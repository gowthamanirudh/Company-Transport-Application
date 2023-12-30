import { CommonModule, NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-etransport',
  standalone: true,
  imports: [NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault, CommonModule],
  templateUrl: './etransport.component.html',
  styleUrl: './etransport.component.css'
})
export class EtransportComponent {
    showH2tag=true;
    constructor(private busservice:BusService){
      this.buses=this.busservice.buses;
    }
    buses!: any[];
//   buses=[{
//     bus:"MORNING BUS",
//     desc:"Employees accessing the morning buses",
//     sdesc:"Specially for Morning Buses"
//   },
//   {
//     bus:"AFTERNOON BUS",
//     desc:"Employees accessing the afternoon buses",
//     sdesc:"Specially for Afternoon Buses"
//   },
//   {
//     bus:"EVENING BUS",
//     desc:"Employees accessing the evening buses",
//     sdesc:"Specially for Evening Buses"
//   }
// ]
    onclick(){

    }

}
