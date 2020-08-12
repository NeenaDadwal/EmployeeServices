import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeListComponent } from './Employee/employeeList.component';
import { EmployeetitlePipe } from './Employee/employeetitle.pipe';
import { EmployeeCountComponent } from './Employee/employeeCount.component'; 
import { SimpleComponent } from './Others/simple.component'; 
import { HomeComponent } from './home/home.component'; 
import { PageNotFoundComponent } from './Others/pagenotFound.component'; 

const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "employees", component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent },
    { path: "", redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeetitlePipe,
        EmployeeCountComponent, SimpleComponent, HomeComponent,
        PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
