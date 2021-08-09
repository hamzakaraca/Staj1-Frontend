import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { PlanAddComponent } from './components/plan-add/plan-add.component';
import { PlanDeleteComponent } from './components/plan-delete/plan-delete.component';
import { PlanUpdateComponent } from './components/plan-update/plan-update.component';
import { PlanComponent } from './components/plan/plan.component';
import { PlandetailComponent } from './components/plandetail/plandetail.component';
import { RegisterComponent } from './components/register/register.component';
import { WorkAddComponent } from './components/work-add/work-add.component';
import { WorkDeleteComponent } from './components/work-delete/work-delete.component';
import { WorkUpdateComponent } from './components/work-update/work-update.component';
import { WorkComponent } from './components/work/work.component';
import { WorkerAddComponent } from './components/worker-add/worker-add.component';
import { WorkerDeleteComponent } from './components/worker-delete/worker-delete.component';
import { WorkerUpdateComponent } from './components/worker-update/worker-update.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:PlanComponent,canActivate:[LoginGuard]},
  {path:"plansdetail", component:PlandetailComponent},
  {path:"works/worker/:workerId", component:WorkComponent,canActivate:[LoginGuard]},
  {path:"plandetail",component:PlandetailComponent},
  {path:"plandetails/plan/:planId",component:PlandetailComponent,canActivate:[LoginGuard]},
  {path:"plans/add",component:PlanAddComponent,canActivate:[LoginGuard]},
  {path:"plans/delete",component:PlanDeleteComponent,canActivate:[LoginGuard]},
  {path:"plans/update",component:PlanUpdateComponent,canActivate:[LoginGuard]},
  {path:"workers/add",component:WorkerAddComponent,canActivate:[LoginGuard]},
  {path:"workers/update",component:WorkerUpdateComponent,canActivate:[LoginGuard]},
  {path:"workers/delete",component:WorkerDeleteComponent,canActivate:[LoginGuard]},
  {path:"works/add",component:WorkAddComponent,canActivate:[LoginGuard]},
  {path:"works/update",component:WorkUpdateComponent,canActivate:[LoginGuard]},
  {path:"works/delete",component:WorkDeleteComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"login/register",component:RegisterComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
