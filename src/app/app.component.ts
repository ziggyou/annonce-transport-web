import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { ToasterService} from 'angular2-toaster';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [HttpService]
})
export class AppComponent {
  title = 'app';
  idPoP1 = 'modal3';

  user = {
  	username : "" ,
  	password: ""
  }

  user1 = {
  	nom : "" ,
  	prenom: "",
  	telephone : "" ,
  	adresse: "",
  	email : "" ,
  	facebook: "",
  	instagram : "",
  	snap : "",
  	linkedin: "",
  	twiter: "",
  	username : "",
  	password: ""
  }

  constructor(private httpService : HttpService, private router: Router, private toasterService: ToasterService){
  	this.toasterService = toasterService;
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

  	}else
  	{

  	}


  }

  test(){
  	this.toasterService.pop('warning', ' test', 'body test');
  }


  register(){ console.log(this.user)

  	this.httpService.inscription(this.user)
  		.subscribe(
  			data=>this.handleInscrip(data)
  			)
  }

  handleInscrip(data){
  	if (data) {
  		this.router.navigate(["annonce/ajouter"])
      this.idPoP1='rien'
  	}else
  	{

  	}
	}

  gerrerAnnonce()
  {
    this.router.navigate(["/"])
  }
}
