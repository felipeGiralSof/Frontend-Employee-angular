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
  id: number = 0;
  displayedColumns: string[] = [
    "id", "surname", "secondSurname", "firstName", "otherNames", "country", "identificationType",
    "identificationNumber", "email", "admissionDate", "workArea", "status", "createAt", "actions"
  ];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void { this.getUser().then(); }

  getUser() {
    return new Promise((solve) => {
      this.employeesService.getAllUsers()
        .subscribe(data => {
          this.users = data;
          solve(data);
        });
    });
  }

  changeStatusAction(event:string) {
    this.id = 0;
    this.getUser().then(data => {
      this.statusAction = event;
    });
  }

  eliminarUser(id: number) {
    this.employeesService.removeUser(id)
      .subscribe(data => {
        this.getUser().then()
      });
  }
 }
