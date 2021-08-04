import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Plan } from '../models/plan';
import { PlanDetailDto } from '../models/plansdetaildto';
import { SingleResponseModel } from '../models/singleReponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  apiUrl="https://localhost:44364/api/"

  constructor(private httpClient:HttpClient) { }
  
  getPlans():Observable<ListResponseModel<Plan>>{
    let newPath=this.apiUrl+"plans/getall"
    return this.httpClient.get<ListResponseModel<Plan>>(newPath);
  }
  getPlansDetail():Observable<ListResponseModel<PlanDetailDto>>{
    let newPath=this.apiUrl+"plans/getplansdetail"
    return this.httpClient.get<ListResponseModel<PlanDetailDto>>(newPath);
  }
  getPlanDetail(planId:number):Observable<SingleResponseModel<PlanDetailDto>>{
    let newPath=this.apiUrl+"plans/getplandetail?planId="+planId
    return this.httpClient.get<SingleResponseModel<PlanDetailDto>>(newPath);
  }
  add(plan:Plan):Observable<ResponseModel>{
    let newPath=this.apiUrl+"plans/add"
    return this.httpClient.post<ResponseModel>(newPath,plan)
  }
}
