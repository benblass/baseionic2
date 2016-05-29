import {Injectable, EventEmitter} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {Storage, LocalStorage} from 'ionic-angular';
import {FirebaseAuth, AuthProviders, AuthMethods} from 'angularfire2';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

	public authStatusChange: EventEmitter<any>;
	public errorObservable: Observable<any>;
	private errorObserver: Observer<any>;
	
	isAuthenticated: boolean = false;

	public user: string;

	constructor(private auth: FirebaseAuth) {
		this.authStatusChange = new EventEmitter();
		this.errorObservable = Observable.create((observer) => {
			this.errorObserver = observer;
		}).share();
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
			console.log('catched in service ', error);
			this.errorObserver.next(error);
		});
	}

	registerEmail(credentials) {
		return this.auth.createUser(credentials)
			.then((authData) =>{
				console.log(authData)
				return this.loginEmail(credentials);
			}).catch((error) => {
				this.errorObserver.next(error);
			});
	}

	renewpass() {}

	logout() {
		this.auth.logout();
		this.isAuthenticated = false;
		this.authStatusChange.next(true);
	}
	
}