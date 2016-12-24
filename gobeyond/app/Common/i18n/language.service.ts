import {Injectable} from "@angular/core";
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LanguageService {
	language={};
	constructor (private http: Http) {
	}

	getLabels() {

		return this.http.get("/newapp/checkin/i18n/language")
			   .toPromise()
			   .then(
					(response : any) => {
						this.setLanguage(JSON.parse(response._body));
					}
				).catch(
					err => {
						console.log(err);
					}
				)
	}

	setLanguage(language : any){
		this.language = language;
	}

	getLanguage() {
		return this.language;
	}
}