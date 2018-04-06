import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

	employees : any = {}
	constructor(public http : Http) 
	{
  
	}

	ngOnInit() {
	}
  
	
		getModel(yname){
			console.log(yname);
		}
		
		onSubmit(empModel, empForm){
			/*this.http.post("http://localhost:4200/employees", empModel).map(data => data.json()).subscribe(data =>{
				console.log(data)
			}, err => {
				console.log(err)
			})*/
			console.log(empModel, empForm);
		}
}
