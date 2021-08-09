import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanComponent } from './components/plan/plan.component';
import { WorkerComponent } from './components/worker/worker.component';
import { NaviComponent } from './components/navi/navi.component';
import { PlandetailComponent } from './components/plandetail/plandetail.component';
import { WorkComponent } from './components/work/work.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';

import { ToastrModule } from 'ngx-toastr';
import { PlanAddComponent } from './components/plan-add/plan-add.component';
import { WorkAddComponent } from './components/work-add/work-add.component';
import { WorkerAddComponent } from './components/worker-add/worker-add.component';
import { WorkUpdateComponent } from './components/work-update/work-update.component';
import { WorkerUpdateComponent } from './components/worker-update/worker-update.component';
import { WorkerDeleteComponent } from './components/worker-delete/worker-delete.component';
import { WorkDeleteComponent } from './components/work-delete/work-delete.component';
import { PlanUpdateComponent } from './components/plan-update/plan-update.component';
import { PlanDeleteComponent } from './components/plan-delete/plan-delete.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    WorkerComponent,
    NaviComponent,
    PlandetailComponent,
    WorkComponent,
    VatAddedPipe,
    PlanAddComponent,
    WorkAddComponent,
    WorkerAddComponent,
    WorkUpdateComponent,
    WorkerUpdateComponent,
    WorkerDeleteComponent,
    WorkDeleteComponent,
    PlanUpdateComponent,
    PlanDeleteComponent,
    LoginComponent,
    RegisterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
