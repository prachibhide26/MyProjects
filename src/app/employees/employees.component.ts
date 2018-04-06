import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

	employee : any = [{fname : "Prachi", lname : "Bhide", email : "pra@gmail.com", contact : "9585474563", desg : "Trainee", addr : "Chinchwad", _id : 1},{fname : "Mayuri", lname : "Jadhav", email : "mayu@gmail.com", contact : "9970727532", desg : "Trainee", addr : "Chinchwad", _id : 2}]

  constructor(public http : Http) {
			this.http.post("http://localhost:4200/employees", {}).map(data => data.json()).subscribe(data =>{
				console.log(data)
			}, err => {
				console.log(err)
			})
  }

  ngOnInit() {
  }

}
