import { Component, OnInit } from '@angular/core';
import { SharedservicesService } from 'src/app/sharedservices.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.scss']
})
export class ShowDepComponent implements OnInit{
  constructor(private service:SharedservicesService){}
  departementlist:any=[];
  ModalTitle!: string;
  ActivatAddEditDepComp:boolean=false;
  dep:any;
  departementIdFilter:string="";
  departementNameFilter:string="";
  departementListWithoutFilter:any=[];
ngOnInit(): void {
  this.refreshDepList();
}
refreshDepList(){
  this.service.getDepList().subscribe(
    (data)=>{
      this.departementlist=data;
      this.departementListWithoutFilter=data;
    });
}
filterFn(){
  var departementIdFilter=this.departementIdFilter;
  var departementNameFilter=this.departementNameFilter;
  this.departementlist=this.departementListWithoutFilter.filter(
    function(el:any){
      return el.DepartementId.toString().toLowerCase().includes(
        departementIdFilter.toString().trim().toLowerCase()
      )&&
      el.DepartementName.toString().toLowerCase().includes(
        departementNameFilter.toString().trim().toLowerCase()
      )
    }
  )
}
addClick() {
  this.dep = {
    DepartementId: 0,
    DepartementName: ""
  };
  this.ModalTitle = "Add Department";
  this.ActivatAddEditDepComp = true;
}
deleteClick(item:any){
  if(confirm('Are you sure??')){
    this.service.deleteDepartement(item.DepartementId).subscribe(
      (data)=>{
        alert(data.toString());
        this.refreshDepList();
      }
    )
  }
}
updateClick(item:any) {
  this.dep = item;
  this.ModalTitle = "Update Department";
  this.ActivatAddEditDepComp = true;
}
closeClick(){
  this.ActivatAddEditDepComp=false;
  this.refreshDepList();
 
}
}
