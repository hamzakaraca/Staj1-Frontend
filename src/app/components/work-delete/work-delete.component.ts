import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work-delete',
  templateUrl: './work-delete.component.html',
  styleUrls: ['./work-delete.component.css']
})
export class WorkDeleteComponent implements OnInit {

  workDeleteForm:FormGroup
  constructor(private workService:WorkService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createWorkDeleteForm();
  }

  createWorkDeleteForm(){
    this.workDeleteForm=this.formBuilder.group({
      workId:["",Validators.required],
      workName:["",]
    })
  }

  deleteWork(){
    if (this.workDeleteForm.valid) {
      let workModel=Object.assign({},this.workDeleteForm.value)
      this.workService.delete(workModel).subscribe(response=>{
        this.toastrService.success("İş başarıyla silindi","Silme")
      },responseError=>{
        if (responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          
          }}
      })
    }
    else{
      this.toastrService.error("Form hatalı","HATA!!!")
    }
  }
}
