import { Component, OnInit } from "@angular/core"

import { IEmployee } from './employee'
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: "./employeeList.component.html",
    styleUrls: ["./employeeList.component.css"],
    providers: [EmployeeService ]
})

export class EmployeeListComponent implements OnInit{
    employees: IEmployee[];
    selectedEmpCountRadiobutton: string = "All";
    statusMessage: string = "Loading Data , Please wait...";

    //private _employeeService = EmployeeService;

    constructor(private _employeeService: EmployeeService) {
        
    }

    getEmployeesCount(): number {
        return this.employees.length;
    }

    ngOnInit() {
        //service call
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
            (error) => {
                this.statusMessage = "Problem with the srevice. Please try again later";
            });
    }

    getMaleEmployees(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getFemaleEmployees(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    onEmployeecountRadioButtonChange(selectedRadiobutonvalue: string): void {
        this.selectedEmpCountRadiobutton = selectedRadiobutonvalue;
    }
    //getemployees(): void {
    //    this.employees = [
    //        { code: 'emp01', name: "Tom", gender: "Male", annualSalary: '5500' },
    //        { code: 'emp02', name: "Tom", gender: "Male", annualSalary: '5500' },
    //        { code: 'emp03', name: "Rekha", gender: "Female", annualSalary: '5500' },
    //        { code: 'emp04', name: "Tom", gender: "Male", annualSalary: '5500' },
    //        { code: 'emp05', name: "Jaya", gender: "Female", annualSalary: '5500' }];
    //}

    //trackbyemployeecode(index: number, employee: any): string {
    //    return employee.code;
    //}
}