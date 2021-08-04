import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.css']
})
export class WorkerAddComponent implements OnInit {
  
  workerAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,private workerservice:WorkerService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createWorkerAddForm();
  }
  createWorkerAddForm(){
    this.workerAddForm=this.formBuilder.group({
      firstName:["",],
      lastName:["",]
    })
  }
  add(){
    let workerModel=Object.assign({},this.workerAddForm.value)
    this.workerservice.add(workerModel).subscribe(response=>{
      this.toastrService.success("Ekleme başarılı","Çalışan ekleme")
    })
  }
}
