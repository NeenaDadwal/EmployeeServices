"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./Employee/employee.component");
var employeeList_component_1 = require("./Employee/employeeList.component");
var employeetitle_pipe_1 = require("./Employee/employeetitle.pipe");
var employeeCount_component_1 = require("./Employee/employeeCount.component");
var simple_component_1 = require("./Others/simple.component");
var home_component_1 = require("./home/home.component");
var pagenotFound_component_1 = require("./Others/pagenotFound.component");
var appRoutes = [
    { path: "home", component: home_component_1.HomeComponent },
    { path: "employees", component: employeeList_component_1.EmployeeListComponent },
    { path: 'employees/:code', component: employee_component_1.EmployeeComponent },
    { path: "", redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pagenotFound_component_1.PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, employeeList_component_1.EmployeeListComponent, employeetitle_pipe_1.EmployeetitlePipe,
                employeeCount_component_1.EmployeeCountComponent, simple_component_1.SimpleComponent, home_component_1.HomeComponent,
                pagenotFound_component_1.PageNotFoundComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map