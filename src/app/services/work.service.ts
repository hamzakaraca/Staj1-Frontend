import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Work } from '../models/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  apiUrl="https://localhost:44364/api/"
  constructor(private httpClient:HttpClient) { }
  
  getWorks():Observable<ListResponseModel<Work>>{
    let newPath=this.apiUrl+"works/getall"
    return this.httpClient.get<ListResponseModel<Work>>(newPath)
  }
  getAllWorksByWorker(workerId:number):Observable<ListResponseModel<Work>>{
    let newPath=this.apiUrl+"works/getallbyworker?workerId="+workerId
    return this.httpClient.get<ListResponseModel<Work>>(newPath)
  }
  
  add(work:Work):Observable<ResponseModel>{
    let newPath=this.apiUrl+"works/add"
    return this.httpClient.post<ResponseModel>(newPath,work)
  }
  update(work:Work):Observable<ResponseModel>{
    let newPath=this.apiUrl+"works/update"
    return this.httpClient.post<ResponseModel>(newPath,work)
  }
  
  delete(work:Work):Observable<ResponseModel>{
    let newPath=this.apiUrl+"works/delete"
    return this.httpClient.post<ResponseModel>(newPath,work)
  }
}
