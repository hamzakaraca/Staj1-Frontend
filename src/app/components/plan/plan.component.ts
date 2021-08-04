import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  plans: Plan[] = [];
  currentPlan:Plan;
  dataLoaded=false;
  

  constructor(private planService:PlanService,private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getPlans();

  }
  setCurrentPlan(plan:Plan){
    this.currentPlan=plan
  }

  getPlans(){
    this.planService.getPlans().subscribe(response =>{
      this.plans=response.data;
      this.dataLoaded=true;
    });
  }

  planDetailListedInfo(){
    
    this.toastrService.success("Planın detayları listelendi")
  }

  
}
