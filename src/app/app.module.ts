import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*import { DataService } from */
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesComponent } from './employees/employees.component';

const appRoutes: Routes = [
   { path: 'AddEmployee', component: AddEmployeeComponent },
   { path: 'EditEmployee', component: EditEmployeeComponent },
   { path: 'Employees', component: EmployeesComponent },
   { path: 'Employees/:id', component: EmployeesComponent }
   
];

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
