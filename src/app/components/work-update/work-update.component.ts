import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work-update',
  templateUrl: './work-update.component.html',
  styleUrls: ['./work-update.component.css']
})
export class WorkUpdateComponent implements OnInit {
  workUpdateForm:FormGroup
  constructor(private workService:WorkService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createWorkUpdateForm();
  }
  createWorkUpdateForm(){
    this.workUpdateForm=this.formBuilder.group({
      workId:["",Validators.required],
      workerId:["",],
      workName:["",Validators.compose([Validators.required,Validators.minLength(3)])],
      progressStatus:["",Validators.required],
      finalDate:["",]
    })
  }
  updateWork(){
    if(this.workUpdateForm.valid){
      let workModel=Object.assign({},this.workUpdateForm.value) 
      this.workService.update(workModel).subscribe(response=>{
        this.toastrService.success("İş başarıyla güncellendi","Güncelleme")
      },responseError=>{
        if (responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          
          }}
      })
    }else {
      this.toastrService.error("Form hatalı","HATA!!!")
    }
  }
}
