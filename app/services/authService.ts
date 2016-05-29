import {Injectable, EventEmitter} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Storage, LocalStorage} from 'ionic-angular';
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class AuthService {

	public authStatusChange: EventEmitter<any>;
	public authError: EventEmitter<any>;

	isAuthenticated: boolean = false;

	constructor(private http: Http) {
		this.authStatusChange = new EventEmitter();
		this.authError = new EventEmitter();
	}

	login(credentials) {
		this.isAuthenticated = true;
		this.authStatusChange.next(true);
	}

	register(credentials) {}

	renewpass() {}

	logout() {
		this.isAuthenticated = false;
		this.authStatusChange.next(true);
	}
	
}