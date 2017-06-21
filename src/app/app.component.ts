import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [HttpService]
})
export class AppComponent {
  title = 'app';

  user = {
  	username : "" ,
  	password: ""
  } 

  constructor(private httpService : HttpService, private router: Router){

  }

  login(){ console.log(this.user)
  	this.httpService.connexion(this.user)
  		.subscribe(
  			data=>this.handleLogin(data)
  			)
  }
  
  handleLogin(data){
  	if (data) {
  		this.router.navigate(["annonce/ajouter"])
  	};
  }
}
