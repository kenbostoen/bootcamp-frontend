import { Action } from '@ngrx/store';
import { Employee } from '../model/employee';


export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

export class AddEmployeeAction implements Action {
    readonly type = ADD_EMPLOYEE;
    constructor(public payload: Employee) {
    }
}

export class GetEmployeesAction implements Action {
    readonly type = GET_EMPLOYEES;
    constructor(public payload: Employee[]) {
    }
}

export class DeleteEmployeeAction implements Action {
    readonly type = DELETE_EMPLOYEE;
    constructor(public payload: number) {
    }
}

export type AppActions = AddEmployeeAction | DeleteEmployeeAction | GetEmployeesAction;
