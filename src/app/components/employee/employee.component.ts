import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country, IdentificationType, WorkArea} from 'src/app/models/employee.model';
import {EmployeesService} from '../../services/employees.service'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Output() saved = new EventEmitter<string>();
  @Input() id: number = 0;

  public form : FormGroup;
  country: Country[] = [];
  workArea: WorkArea[] = [];
  identificationType: IdentificationType[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService
  ) {
    this.form = this.formBuilder.group({
      id: new FormControl(),
      surname: ['', [Validators.required]],
      secondSurname: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      otherNames: ['', [Validators.required]],
      country: ['', [Validators.required]],
      identificationType: ['', [Validators.required]],
      identificationNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
      admissionDate: ['', [Validators.required]],
      workArea: ['', [Validators.required]],
      createAt: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.employeesService.getCountry().subscribe(data => { this.country = data; });
    this.employeesService.getWorkArea().subscribe(data => { this.workArea = data; });
    this.employeesService.getIdentificationType().subscribe(data => { this.identificationType = data; });
  }
  saveEmployee(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const employee = this.form.value;

      employee.identificationType = this.identificationType[0];
      employee.workArea = this.workArea[0];
      employee.country = this.country[0];

      if(employee.id) {
        this.employeesService.edit(employee).subscribe((newEmployee) => {
          this.saved.emit('table');
        });
      } else {
        this.employeesService.create(employee).subscribe((newEmployee) => {
          this.saved.emit('table');
        });
      }
    }
  }

}
