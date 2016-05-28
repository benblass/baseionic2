import {Page, Modal, NavController, ViewController} from 'ionic-angular';
import {FORM_DIRECTIVES} from '@angular/common';
import {AuthService} from '../../services/authService';
import {TabsPage} from '../tabs/tabs';

@Page({
  templateUrl: 'build/pages/login/login.html',
  directives: [FORM_DIRECTIVES]
})
export class LoginPage {

	authType: string = "login";
	errorMessage: string = null;

  constructor(private auth: AuthService, private nav: NavController) {
  		this.auth.authStatusChange.subscribe(data => this.changeRootifAuth());
			if (this.auth.isAuthenticated) {
				this.nav.setRoot(TabsPage);
			}

  }

  changeRootifAuth() {
  	if (this.auth.isAuthenticated){
  		this.nav.setRoot(TabsPage);
  	} else {
		this.nav.setRoot(LoginPage);
  	}
  }

  registerValidate(credentials) {
  	if (credentials.password1 == credentials.password2) {
  			credentials.password = credentials.password1;
			this.auth.registerEmail(credentials)
				.then()
				.catch((error) => {this.errorMessage = error})
  	} else {
  		this.errorMessage = "Passwords do not match..."
  	}
   }

  renew() {
	  let modal = Modal.create(forgottenModal);
	  this.nav.present(modal);
  }

  onSegmentChanged() {
  	this.errorMessage = "";
  }

  onInput() {
  	this.errorMessage = "";	
  }
}



@Page({
	templateUrl: 'build/pages/login/forgotten.html',
})
class forgottenModal {

	message: string = null;

	constructor(private viewCtrl: ViewController, private auth: AuthService) {
	}

	sendRenew() {
		this.auth.renewpass();
		this.message = "Email sent...check your inbox !";
		setTimeout(() => this.dismiss(), 3000);

	}

	dismiss() {
		this.viewCtrl.dismiss();
	}
}
