import {Page, NavController} from 'ionic-angular';
import {FORM_DIRECTIVES} from '@angular/common';
import {AuthService} from '../../services/authService';
import {TabsPage} from '../tabs/tabs';



@Page({
  templateUrl: 'build/pages/login/login.html',
  directives: [FORM_DIRECTIVES]
})
export class LoginPage {

	authType: string = "login";

  constructor(private auth: AuthService, private nav: NavController) {
  	if (this.auth.isAuthenticated) {
  		this.auth.authStatus.subscribe(data => this.changeRootifAuth());
  	}
  }

  changeRootifAuth() {
  	if (this.auth.isAuthenticated){
  		this.nav.setRoot(TabsPage);
  	} else {
		this.nav.setRoot(LoginPage);
  	}
  }

  renew() {
  	//Show modal for renewal
  }
}
