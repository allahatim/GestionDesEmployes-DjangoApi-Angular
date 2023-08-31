import { Component, Input, OnInit } from '@angular/core';
import { SharedservicesService } from 'src/app/sharedservices.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.scss']
})
export class AddEditEmpComponent implements OnInit{
  constructor(private service: SharedservicesService){}
  @Input() emp: any;
  EmployeeID!: string;
  EmployeeName!: string;
  Departement!: string;
  DateOfJoinging!: string;
  PhotoFileName!: string;
  PhotoFilePath!: string;
  DepartementListe:any=[];
  ngOnInit(): void {
    this.getAllDepartementsName();
  }
  getAllDepartementsName(){
    return this.service.getAllDepartementName().subscribe(
      (data:any)=>{
        this.DepartementListe=data;
        this.EmployeeID=this.emp.EmployeeID;
        this.EmployeeName = this.emp.EmployeeName;
        this.Departement = this.emp.Departement;
        this.DateOfJoinging = this.emp.DateOfJoinging;
        this.PhotoFileName = this.emp.PhotoFileName;
        this.PhotoFilePath = this.service.PhotoUrl+this.PhotoFileName;
      }
    )
  }
  addEmployee(){
    var val={
      EmployeeID:this.EmployeeID,
      EmployeeName:this.EmployeeName,
      Departement:this.Departement,
      DateOfJoinging:this.DateOfJoinging,
      PhotoFileName:this.PhotoFileName,
    }
    console.log(val);
    this.service.addEmployee(val).subscribe(
      (res)=>{
        alert(res.toString())
      }
    )
  }
  updateEmployee(){
    var val={
      EmployeeID:this.EmployeeID,
      EmployeeName:this.EmployeeName,
      Departement:this.Departement,
      DateOfJoinging:this.DateOfJoinging,
      PhotoFileName:this.PhotoFileName,
    }
    this.service.updateEmployee(val).subscribe(
      (res)=>{
        alert(res.toString())
      }
    )
  }
  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
}
