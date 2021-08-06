import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plan-delete',
  templateUrl: './plan-delete.component.html',
  styleUrls: ['./plan-delete.component.css']
})
export class PlanDeleteComponent implements OnInit {
  planDeleteForm:FormGroup
  constructor(private toastrService:ToastrService,private planService:PlanService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createPlanDeleteForm()
  }

  createPlanDeleteForm(){
    this.planDeleteForm=this.formBuilder.group({
      planId:["",Validators.required],
      direction:["",]
    })
  }

  deletePlan(){
    if (this.planDeleteForm.valid) {
      let planModel=Object.assign({},this.planDeleteForm.value)
      this.planService.deletePlan(planModel).subscribe(response=>{
        this.toastrService.success("Plan başarıyla silindi","Silme")
      },responseError=>{
        if (responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          
          }}
      })
    }
  }
  
}
