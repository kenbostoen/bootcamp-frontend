import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "../services/employee.service";
import { Employee } from "../model/employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { EmployeeSandbox } from '../sandboxes/employee.sandbox';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]> = this.employeeSandbox.employees$;

  constructor(private employeeSandbox: EmployeeSandbox,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employeeSandbox.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeSandbox.deleteEmployee(id);
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}