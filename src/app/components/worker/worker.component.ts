import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  workers:Worker[]=[];
  currentWorker:Worker;
  constructor(private workerService:WorkerService) { }

  ngOnInit(): void {
    this.getWorkers();
  }

  getWorkers(){
    this.workerService.getWorkers().subscribe(response=>{
      this.workers=response.data;
    })
  }

  setCurrentWorker(worker:Worker){
    this.currentWorker=worker;

  }

  getCurrentWorkerClass(worker:Worker){
   if(worker==this.currentWorker){
     return "list-group-item active"
   }
   else{
    return "list-group-item"
   }
  }
  
  getAllWorkerClass(){
    if(!this.currentWorker){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  clearCurrentWorker(){
    this.currentWorker.firstName=""
    this.currentWorker.lastName=""
    this.currentWorker.workerId=0
  }

}
