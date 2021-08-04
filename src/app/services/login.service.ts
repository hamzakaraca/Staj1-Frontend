import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleReponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44364/api/"

  login(loginModel:LoginModel){
    let newPath=this.apiUrl+"auth/login"
    this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel)
  }
}
