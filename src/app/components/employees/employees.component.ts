import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import {EmployeesService} from '../../services/employees.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  statusAction: string = 'table';
  users: Employee[] = [];
  displayedColumns: string[] = [
    "id", "surname", "secondSurname", "firstName", "otherNames", "country", "identificationType",
    "identificationNumber", "email", "admissionDate", "workArea", "status", "createAt", "actions"
  ];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getAllUsers()
    .subscribe(data => { this.users = data; });
  }

  changeStatusAction(action: string) {
    this.statusAction = action
  }
}
