import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plan-add',
  templateUrl: './plan-add.component.html',
  styleUrls: ['./plan-add.component.css']
})
export class PlanAddComponent implements OnInit {

  planAddForm:FormGroup 
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private planService:PlanService) { }

  ngOnInit(): void {
    this.createPlanAddForm();
  }

  createPlanAddForm(){
    this.planAddForm=this.formBuilder.group({
      workId:["",Validators.required],
      workerId:["",Validators.required],
      direction:["",]
    })
  }
  add(){
    if(this.planAddForm.valid){
      let planModel= Object.assign({},this.planAddForm.value)
      this.planService.add(planModel).subscribe(response=>{
        this.toastrService.success(response.messages,"Plan Ekleme Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
            
          }
          
        }
        
      })
      
    }else{
      this.toastrService.error("Form hatalı","Ekleme Başarısız!!")
    }
     
    
  }
}
