import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Work } from 'src/app/models/work';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  works:Work[]=[];
  constructor(private workService:WorkService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["workerId"]){
        this.getAllWorksByWorker(params["workerId"])
      }
      else{
        this.getWorks()
      }
    })
  }

  getWorks(){
    this.workService.getWorks().subscribe(response=>{
      this.works=response.data;
    })
  }
  getAllWorksByWorker(workerId:number){
    this.workService.getAllWorksByWorker(workerId).subscribe(response=>{
      this.works=response.data;
    })
  }
}
