import {Injectable, EventEmitter} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Storage, LocalStorage} from 'ionic-angular';
import {FirebaseAuth, AuthProviders, AuthMethods} from 'angularfire2';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

	public authStatusChange: EventEmitter<any>;
	isAuthenticated: boolean = false;

	public user: string;

	constructor(private auth: FirebaseAuth) {
		this.authStatusChange = new EventEmitter();
	}

	loginEmail(credentials) {
		return this.auth.login(credentials, {
			provider: AuthProviders.Password,
			method: AuthMethods.Password
		}).then((value) => {
			console.log(value);
			this.user = value.uid;
			this.isAuthenticated = true;
			this.authStatusChange.next(true);
		}).catch((error) => {
			console.log(error);
		});
	}

	registerEmail(credentials) {
		return this.auth.createUser(credentials).then((authData) =>{
			console.log(authData)
			return this.loginEmail(credentials);
		})
	}

	renewpass() {}

	logout() {
		this.auth.logout();
		this.isAuthenticated = false;
		this.authStatusChange.next(true);
	}
	
}