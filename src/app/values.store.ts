import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ValuesStore {
    constructor(private requestService: RequestService) { }

    getWelcomeText(): Observable<string> {
        return this.requestService.makeGet<string>('values/welcome-text');
    }
}

