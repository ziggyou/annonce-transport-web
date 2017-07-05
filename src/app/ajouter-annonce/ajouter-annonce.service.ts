import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AjouterAnnonceService {

	base_Url = "https://annonces-transport-api.herokuapp.com/api";
  constructor(private http : Http) { }

  getAnnonceType() {
    return this.http.get(this.base_Url + "/Typeannonces/")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

    ajouter(annonce){
  	const body= JSON.stringify(annonce);
  	const headers = new Headers();
  	headers.append("Content-Type", "application/json")
   return this.http.post(this.base_Url + "/Annonces", body, {headers: headers}).map((res:Response)=>res.json())
   .catch((error:any) =>Observable.throw(error.json().error || 'Serve error'));
  }


}
