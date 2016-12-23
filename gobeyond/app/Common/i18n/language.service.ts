import {Injectable} from "@angular/core";
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LanguageService {
	constructor (private http: Http) {}

	getLabels() {
		debugger;
		return this.http.get("/newapp/checkin/i18n/language")
			   .toPromise();
	}
}