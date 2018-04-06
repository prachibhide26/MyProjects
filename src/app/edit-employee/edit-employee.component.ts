import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

	employees : any = {}
	constructor(public http : Http) 
	{
  
	}
	ngOnInit() {
	
	}
		
	onSubmit(empModel, empForm){
		this.http.post("http://localhost:4200/employees", empModel).map(data => data.json()).subscribe(data =>{
			console.log(data)
		}, err => {
			console.log(err)
		})
		console.log(empModel, empForm);
	}
  }

