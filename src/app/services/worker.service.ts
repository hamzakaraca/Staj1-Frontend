import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Worker } from '../models/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  apiUrl="https://localhost:44364/api/"

  constructor(private httpClient:HttpClient) { }

  getWorkers():Observable<ListResponseModel<Worker>>{
    let newPath = this.apiUrl+"workers/getall"
    return this.httpClient.get<ListResponseModel<Worker>>(newPath);
  }
  add(worker:Worker):Observable<ResponseModel>{
    let newPath = this.apiUrl+"workers/add"
    return this.httpClient.post<ResponseModel>(newPath,worker)
  }
  updateWorker(worker:Worker):Observable<ResponseModel>{
    let newPath=this.apiUrl+"workers/update"
    return this.httpClient.post<ResponseModel>(newPath,worker)
  }
  deleteWorker(worker:Worker):Observable<ResponseModel>{
    let newPath=this.apiUrl+"workers/delete"
    return this.httpClient.post<ResponseModel>(newPath,worker)
  }
}
