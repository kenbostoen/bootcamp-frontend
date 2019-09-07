import { Injectable } from "@angular/core";
import { AppState } from "../statemanagement/app.state";
import { Store } from "@ngrx/store";
import { EmployeeService } from '../services/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import {
    AddEmployeeAction,
    GetEmployeesAction,
    DeleteEmployeeAction,
} from "../statemanagement/app.actions";

@Injectable()
export class EmployeeSandbox {
    readonly employees$ = this.store.select('employees');

    constructor(private store: Store<AppState>,
        private service: EmployeeService) {
    }


    getEmployee(id: number): Observable<Employee> {
        return this.service.getEmployee(id);
    }
    createEmployee(employee: Employee): void {
        this.service.createEmployee(employee).subscribe((employee: Employee) => {
            this.store.dispatch(new AddEmployeeAction(employee));
        });
    }

    deleteEmployee(id: number): void {
        this.service.deleteEmployee(id).subscribe(() => {
            this.store.dispatch(new DeleteEmployeeAction(id));
        });
    }

    getEmployeesList(): void {
        this.service.getEmployeesList().subscribe((employees: Employee[]) => {
            this.store.dispatch(new GetEmployeesAction(employees));
        });
    }
}
