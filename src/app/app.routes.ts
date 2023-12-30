import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { EtransportComponent } from './etransport/etransport.component';
import { EmployeeComponent } from './employee/employee.component';
import { DriverComponent } from './driver/driver.component';

export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: EtransportComponent },
  { path: 'emp', component: EmployeeComponent },
  { path: 'driver', component: DriverComponent },

];

@NgModule({
  imports: [RouterModule.forChild([{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: EtransportComponent },
  { path: 'emp', component: EmployeeComponent },
  { path: 'driver', component: DriverComponent }])],
  //exports: [RouterModule]
})
export class AppRoutingModule { }
