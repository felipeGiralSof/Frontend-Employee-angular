export interface Employee {
  id: number;
  surname: string;
  secondSurname: string;
  firstName: string;
  otherNames: string;
  country: Country;
  identificationType: IdentificationType;
  identificationNumber: string;
  email: string;
  admissionDate: string;
  workArea: WorkArea;
  status: boolean;
  createAt: string;
}

export interface Country {
  id: number;
  code: string;
  name: string;
}

export interface IdentificationType {
  id: number;
  name: string;
  description: string;
}

export interface WorkArea {
  id: number;
  name: string;
  description:string;
}

export interface CreateEmployeeDTO extends Omit<Employee, 'id'> {}

export interface UpdateEmployeeDTO extends Partial<CreateEmployeeDTO>{}
