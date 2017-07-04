import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ListeAnnonceService {

  base_Url = "https://annonces-transport-api.herokuapp.com/api";
  constructor(private http: Http) {
  }

  getAnnonces(id) {
    return this.http.get(this.base_Url + "/Utilisateurs/" + id + "/annonces/")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
