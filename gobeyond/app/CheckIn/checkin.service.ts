import {Injectable} from "@angular/core";
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CheckinService {
	constructor (private http: Http) {}

	getCheckinStatus(request: any) {
		return this.http.post("/newapp/checkin/status",request)
			   .toPromise();
	}
}