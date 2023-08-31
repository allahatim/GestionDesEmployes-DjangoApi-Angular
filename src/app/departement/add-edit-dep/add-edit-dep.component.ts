import { Component,Input, OnInit } from '@angular/core';
import { SharedservicesService } from 'src/app/sharedservices.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.scss']
})
export class AddEditDepComponent implements OnInit{
  constructor(private service: SharedservicesService){}
  @Input() dep: any;
  DepartementId!: string;
  DepartementName!: string;
  ngOnInit(): void {
    this.DepartementId=this.dep.DepartementId;
    this.DepartementName = this.dep.DepartementName;
  }
  addDepartement(){
    var val={
      DepartementId:this.DepartementId,
      DepartementName:this.DepartementName,
    }
    this.service.addDepartement(val).subscribe(
      (res)=>{
        alert(res.toString())
      }
    )
  }
  updateDepartement(){
    var val={
      DepartementId:this.DepartementId,
      DepartementName:this.DepartementName,
    }
    this.service.updateDepartement(val).subscribe(
      (res)=>{
        alert(res.toString())
      }
    )
  }
}
