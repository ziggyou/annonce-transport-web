import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpService {
  base_Url="https://annonces-transport-api.herokuapp.com/api"

  constructor(private http: Http) { }

  connexion(user){
   return this.http.post(this.base_Url + "/Utilisateurs/login", user).map((res:Response)=>res.json())
   .catch((error:any) =>Observable.throw(error.json().error || 'Serve error'));
  }

  inscription(user){
  	const body= JSON.stringify(user);
  	const headers = new Headers();
  	headers.append("Content-Type", "application/json")
   return this.http.post(this.base_Url + "/Utilisateurs", body, {headers: headers}).map((res:Response)=>res.json())
   .catch((error:any) =>Observable.throw(error.json().error || 'Serve error'));
  }
}
