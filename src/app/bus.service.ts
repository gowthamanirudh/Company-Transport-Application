import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  constructor() {}

  buses = [
    {
      bus: 'MORNING BUS',
      desc: 'Employees accessing the Morning bus',
      sdesc: 'Only for Morning shift employees',
    },
    {
      bus: 'AFTERNOON BUS',
      desc: 'Employees accessing the Afternoon bus',
      sdesc: 'Only for Afternoon shift employees',
    },
    {
      bus: 'Evening BUS',
      desc: 'Employees accessing the Evening bus',
      sdesc: 'Only for Evening shift employees',
    },
  ];
}
