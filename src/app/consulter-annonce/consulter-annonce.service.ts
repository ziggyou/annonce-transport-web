import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ConsulterAnnonceService {

  base_Url = "https://annonces-transport-api.herokuapp.com/api";

  constructor(private http: Http) {
  }

  getAnnonces() {
    return this.http.get("https://annonces-transport-api.herokuapp.com/alldata")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
