import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-update',
  templateUrl: './worker-update.component.html',
  styleUrls: ['./worker-update.component.css']
})
export class WorkerUpdateComponent implements OnInit {
  workerUpdateForm:FormGroup
  constructor(private workerService:WorkerService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createWorkerUpdateForm()
  }

  createWorkerUpdateForm(){
    this.workerUpdateForm=this.formBuilder.group({
      workerId:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required]
    })
  }

  updateWorker(){
    if (this.workerUpdateForm.valid) {
      let workerModel=Object.assign({},this.workerUpdateForm.value)
      this.workerService.updateWorker(workerModel).subscribe(response=>{
        this.toastrService.success("Çalışan başarıyla büncellendi","Güncelleme")
      },responseError=>{
        if (responseError.error.Errors.length>0) {
          for (let i = 0; i < responseError.error.Errors.lenth; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
            
          }
        }
      })
    }
    else{
      this.toastrService.error("Form hatalı","Hata!!!")
    }
    

  }
}
