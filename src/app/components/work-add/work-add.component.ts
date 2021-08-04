import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work-add',
  templateUrl: './work-add.component.html',
  styleUrls: ['./work-add.component.css']
})
export class WorkAddComponent implements OnInit {

  workAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,private workService:WorkService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createWorkAddForm()
  }

  createWorkAddForm(){
    this.workAddForm=this.formBuilder.group({
      workerId:["",Validators.min(1)],
      workName:["",],
      progressStatus:["",],
      finalDate:["",]
    })
  }
  add(){
    let workModel=Object.assign({},this.workAddForm.value)
    this.workService.add(workModel).subscribe(response=>{
      this.toastrService.success("İş Ekleme Başarılı","İş Ekleme")
    })
  }
}
