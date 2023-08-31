import { Component, OnInit } from '@angular/core';
import { SharedservicesService } from 'src/app/sharedservices.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.scss']
})
export class ShowEmpComponent implements OnInit{
  constructor(private service:SharedservicesService){}
  employeetlist: any=[];
  ModalTitle!: string;
  ActivatAddEditEmpComp:boolean=false;
  emp:any;
ngOnInit(): void {
  this.refreshEmpList();
}
refreshEmpList(){
  this.service.getEmpList().subscribe(
    (data)=>{
      this.employeetlist=data
    });
}

addClick() {
  this.emp = {
    EmployeeID: 0,
    EmployeeName: "",
    Departement: "",
    DateOfJoinging: "",
    PhotoFileName: "anonymos.png"
  };
  this.ModalTitle = "Add Employee";
  this.ActivatAddEditEmpComp = true;
}
deleteClick(item:any){
  if(confirm('Are you sure??')){
    this.service.deleteEmployee(item.EmployeeID).subscribe(
      (data)=>{
        alert(data.toString());
        this.refreshEmpList();
      }
    )
  }
}
updateClick(item:any) {
  this.emp = item;
  this.ModalTitle = "Update Department";
  this.ActivatAddEditEmpComp = true;
}
closeClick(){
  this.ActivatAddEditEmpComp=false;
  this.refreshEmpList();
 
}
}
