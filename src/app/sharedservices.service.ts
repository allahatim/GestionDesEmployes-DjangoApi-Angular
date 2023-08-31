import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedservicesService {
readonly APIUrl="http://127.0.0.1:8000"
readonly PhotoUrl="http://127.0.0.1:8000/media/"
constructor(private http: HttpClient) {}
  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Departement');
  }
  addDepartement(val:any){
    return this.http.post(this.APIUrl+'/Departement/',val);
  }
  updateDepartement(val:any){
    const url = `${this.APIUrl}/Departement/${val.DepartementId}`;
    return this.http.put(url, val);  }
  deleteDepartement(val:any){
    return this.http.delete(this.APIUrl+'/Departement/'+val);
  }
  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/');
  }
  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee/',val);
  }
  updateEmployee(val:any){
    const url = `${this.APIUrl}/Employee/${val.EmployeeID}`;
    return this.http.put(url, val); 
  }
  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }
  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile/',val);
  }
  getAllDepartementName():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Departement/');
  }
}
