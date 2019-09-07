import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeSandbox } from '../sandboxes/employee.sandbox';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeSandbox: EmployeeSandbox,
    private router: Router) { }

  ngOnInit(): void {
    this.employee = new Employee();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeSandbox.createEmployee(this.employee);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}