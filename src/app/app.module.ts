import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
    WorkerAddComponent
    
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
