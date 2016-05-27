import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Storage, LocalStorage} from 'ionic-angular';
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class AuthService {

	private authstatusObserver: any = null;
	authStatus: any;

	isAuthenticated: boolean = false;

	constructor(private http: Http) {

		this.authStatus = Observable.create(
			observer => { 
				this.authstatusObserver = observer;
			})
	}

	login() {}

	register() {}

	renewpass() {}

	logout() {}
	
}