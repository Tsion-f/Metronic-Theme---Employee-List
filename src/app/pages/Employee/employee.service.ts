import { Injectable } from '@angular/core';
import{Employee} from '../Employee/Employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private URL ='https://jsonplaceholder.typicode.com/users';


  employees$ = this.http.get<Employee[]>(this.URL);

  constructor(private http:HttpClient, public location:Location) { }

  fetchEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.URL);
  }

  
  //Fetching Employee [For Detail] -parametrized
  getEmployee(tracedEmployee:number):Observable<Employee>{
    const url =`${this.URL}/${tracedEmployee}`;
    return this.http.get<Employee>(url);
  }

  //Another way to fetch Employee[For EDIT] because i have to pass id
  getanotherEmployee(Employee:Employee):Observable<Employee>{
    let url2=`${this.URL}/${Employee.id}`;
    console.log(url2);
    return this.http.get<Employee>(url2);
  }

  update(updated:Employee):Observable<Employee>{
      return this.http.put<Employee>(this.URL+'/'+updated.id,updated);
  }

  AddEmployee(added:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.URL,added);
  }


  goBack(){
    this.location.back();
  }




}
