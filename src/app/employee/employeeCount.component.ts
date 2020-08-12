import { Component , Input, Output, EventEmitter} from "@angular/core"

@Component({
    selector: "employee-count",
    templateUrl: './employeeCount.component.html',
    styleUrls:['./employeeCount.component.css']
})
export class EmployeeCountComponent {

    selectedRadioButtonValue: string = "All";

    @Output()
    countradioEventSelectionchangedevent: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    onRadiobuttonselectionchange() {
        this.countradioEventSelectionchangedevent.emit(this.selectedRadioButtonValue)
        console.log(this.selectedRadioButtonValue)
    }
}

