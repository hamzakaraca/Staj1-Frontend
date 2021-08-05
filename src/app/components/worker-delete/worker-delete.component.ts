import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-delete',
  templateUrl: './worker-delete.component.html',
  styleUrls: ['./worker-delete.component.css']
})
export class WorkerDeleteComponent implements OnInit {
  workerDeleteForm:FormGroup
  constructor(private formBuilder:FormBuilder,private workerService:WorkerService,private toastrService:ToastrService) { }

    ngOnInit(): void {
    this.createWorkerDeleteForm()
  }
  createWorkerDeleteForm(){
    this.workerDeleteForm=this.formBuilder.group({
      workerId:["",Validators.required],
      firstName:["",],
      lastName:["",]
    })
  }

  deleteWorker(){
    if (this.workerDeleteForm.valid) {
      let workerModel=Object.assign({},this.workerDeleteForm.value)
      this.workerService.deleteWorker(workerModel).subscribe(response=>{
        this.toastrService.success("İşçi başarıyla silindi","Silme")
      },responseError=>{
        if (responseError.error.Errors.length>0) {
          for (let i = 0; i < responseError.error.Errors.lenth; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
            
          }
        }
      })
    }
    else{
      this.toastrService.error("Form hatalı","HATA!!!")
    }
  }
}
