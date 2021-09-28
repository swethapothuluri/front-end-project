import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {

    this.employees = [{
      "id": 1,
      "firstName": "Maruthi",
      "lastName": "Pothuluri",
      "emailId": "maruthi@gmail.com"
    }];
  }

}
