import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanAddComponent } from './components/plan-add/plan-add.component';
import { PlanDeleteComponent } from './components/plan-delete/plan-delete.component';
import { PlanUpdateComponent } from './components/plan-update/plan-update.component';
import { PlanComponent } from './components/plan/plan.component';
import { PlandetailComponent } from './components/plandetail/plandetail.component';
import { WorkAddComponent } from './components/work-add/work-add.component';
import { WorkDeleteComponent } from './components/work-delete/work-delete.component';
import { WorkUpdateComponent } from './components/work-update/work-update.component';
import { WorkComponent } from './components/work/work.component';
import { WorkerAddComponent } from './components/worker-add/worker-add.component';
import { WorkerDeleteComponent } from './components/worker-delete/worker-delete.component';
import { WorkerUpdateComponent } from './components/worker-update/worker-update.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:PlanComponent},
  {path:"plansdetail", component:PlandetailComponent},
  {path:"works/worker/:workerId", component:WorkComponent},
  {path:"plandetail",component:PlandetailComponent},
  {path:"plandetails/plan/:planId",component:PlandetailComponent},
  {path:"plans/add",component:PlanAddComponent},
  {path:"plans/delete",component:PlanDeleteComponent},
  {path:"plans/update",component:PlanUpdateComponent},
  {path:"workers/add",component:WorkerAddComponent},
  {path:"workers/update",component:WorkerUpdateComponent},
  {path:"workers/delete",component:WorkerDeleteComponent},
  {path:"works/add",component:WorkAddComponent},
  {path:"works/update",component:WorkUpdateComponent},
  {path:"works/delete",component:WorkDeleteComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
