"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = /** @class */ (function () {
    //private _employeeService = EmployeeService;
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.selectedEmpCountRadiobutton = "All";
        this.statusMessage = "Loading Data , Please wait...";
    }
    EmployeeListComponent.prototype.getEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //service call
        this._employeeService.getEmployees()
            .subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusMessage = "Problem with the srevice. Please try again later";
        });
    };
    EmployeeListComponent.prototype.getMaleEmployees = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getFemaleEmployees = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeListComponent.prototype.onEmployeecountRadioButtonChange = function (selectedRadiobutonvalue) {
        this.selectedEmpCountRadiobutton = selectedRadiobutonvalue;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            templateUrl: "./employeeList.component.html",
            styleUrls: ["./employeeList.component.css"],
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map