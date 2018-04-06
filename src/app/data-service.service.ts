import { Injectable } from '@angular/core';
import { Http } from '@angular/http';;

@Injectable()
export class DataServiceService {

  constructor(public http : Http) { }
	/*getMultiple(modelName, filterObject, callback(err, data))
	{
	}
	getSingle(id, modelName, filterObject, callback(err, data))
	{
	}
	postData(modelName, inputObject, callback(err, data))
	{
	}
	updateData(id, modelName, inputObject, callback(err, data))
	{
	}
	deleteData(queryObject/id, modelName, callback(err, data))
	{
	}*/
}
