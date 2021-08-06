import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plan-update',
  templateUrl: './plan-update.component.html',
  styleUrls: ['./plan-update.component.css']
})
export class PlanUpdateComponent implements OnInit {
  planUpdateForm:FormGroup
  constructor(private toastrService:ToastrService,private planService:PlanService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createPlanUpdateForm()
  }

  createPlanUpdateForm(){
    this.planUpdateForm=this.formBuilder.group({
      planId:["",Validators.required],
      workId:["",Validators.required],
      workerId:["",Validators.required],
      direction:["",]
    })
  }

  updatePlan(){
    if (this.planUpdateForm.valid) {
      let planModel=Object.assign({},this.planUpdateForm.value)
      this.planService.updatePlan(planModel).subscribe(response=>{
        this.toastrService.success("Plan başarıyla güncellendi.","Güncelleme")
      },responseError=>{
        if (responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          
          }}
      })
    }
    else{
      this.toastrService.error("Form haatalı","HATA!!!")
    }
  }
}
