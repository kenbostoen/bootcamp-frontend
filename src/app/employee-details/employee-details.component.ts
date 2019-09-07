import { Employee } from '../model/employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeSandbox } from '../sandboxes/employee.sandbox';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router,
    private employeeSandbox: EmployeeSandbox) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.employeeSandbox.getEmployee(this.id).subscribe(employee => {
      this.employee = employee;
    });

  }

  list() {
    this.router.navigate(['employees']);
  }
}