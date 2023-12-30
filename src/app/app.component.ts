import { Component, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
 import { RouterModule, RouterOutlet } from '@angular/router';
import { EtransportComponent } from './etransport/etransport.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { DriverComponent } from './driver/driver.component';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { DriverTableComponent } from './driver-table/driver-table.component';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,EtransportComponent,NavbarComponent,EmployeeComponent,DriverComponent,FormsModule, EmployeeCardComponent, DriverComponent, DriverTableComponent, AppRoutingModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-newtravelapp';


}
