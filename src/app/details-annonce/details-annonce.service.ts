import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class DetailsAnnonceService {

  base_Url = "https://annonces-transport-api.herokuapp.com/api";
  constructor(private http : Http) { }

  getAnnonce(id) {
    return this.http.get(this.base_Url + "/Annonces/" + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUser(id) {
    return this.http.get(this.base_Url + "/Annonces/" + id +"/utilisateur")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAnnonceType(id) {
    return this.http.get(this.base_Url + "/Annonces/" + id +"/typeannonce")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
