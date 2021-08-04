import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanAddComponent } from './components/plan-add/plan-add.component';
import { PlanComponent } from './components/plan/plan.component';
import { PlandetailComponent } from './components/plandetail/plandetail.component';
import { WorkAddComponent } from './components/work-add/work-add.component';
import { WorkComponent } from './components/work/work.component';
import { WorkerAddComponent } from './components/worker-add/worker-add.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:PlanComponent},
  {path:"plansdetail", component:PlandetailComponent},
  {path:"works/worker/:workerId", component:WorkComponent},
  {path:"plandetail",component:PlandetailComponent},
  {path:"plandetails/plan/:planId",component:PlandetailComponent},
  {path:"plans/add",component:PlanAddComponent},
  {path:"workers/add",component:WorkerAddComponent},
  {path:"works/add",component:WorkAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
