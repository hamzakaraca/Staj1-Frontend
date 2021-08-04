import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/plan.service';
import { PlanDetailDto } from 'src/app/models/plansdetaildto';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-plandetail',
  templateUrl: './plandetail.component.html',
  styleUrls: ['./plandetail.component.css']
})
export class PlandetailComponent implements OnInit {

  planDetails:PlanDetailDto[]=[];
  planDetail: PlanDetailDto;
  dataLoaded=false;
  constructor(private planService:PlanService,  private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params)=> {
      if(params['planId']){
        this.getPlanDetail(params['planId'])
      }
    })
    this.getPlansDetail()
  }
  getPlansDetail(){
    this.planService.getPlansDetail().subscribe(response=>{
      this.planDetails=response.data;
      this.dataLoaded=true;
    })
  }
  getPlanDetail(planId:number){
    this.planService.getPlanDetail(planId).subscribe(response=>{
      console.log(response.data)
      this.planDetail =response.data;
    })
   }
   
}
