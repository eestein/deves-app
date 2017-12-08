
import { environment } from '../environments/environment';
import {
    Headers,
    Http,
    RequestOptions,
    Response
} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';

const ApiUrl: string = `${environment.baseUrl}api/`;

/**
 * Serviço gerenciador da comunicação com o servidor
 */
@Injectable()
export class RequestService {
    constructor(
        private http: Http
    ) { }

    /**
     * Cria uma requisição do tipo GET
     * @param {string} url URL de destino
     */
    makeGet<T>(url: string): Observable<T> {
        return this.makeRequest<T>('get', this.getUrl(url, false));
    }

    /**
     * Cria uma requisição do tipo POST
     * @param {string} url URL de destino
     */
    makePost<T>(url: string, data?: Object): Observable<T> {
        return this.makeRequest<T>('post', this.getUrl(url), data);
    }

    /**
     * Cria uma requisição do tipo PUT
     * @param {string} url URL de destino
     */
    makePut<T>(url: string, data?: Object): Observable<T> {
        return this.makeRequest<T>('put', this.getUrl(url), data);
    }

    /**
     * Cria uma requisição do tipo DELETE
     * @param {string} url URL de destino
     */
    makeDelete(url: string): void {
        this.makeRequest('delete', this.getUrl(url));
    }

    private makeRequest<T>(type: string, url: string, data?: Object): Observable<T> {
        let request = null;
        let bodyString = data != null ? JSON.stringify(data) : "";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        switch (type) {
            case "get":
                request = this.http.get(url, options);
                break;
            case "post":
                request = this.http.post(url, bodyString, options);
                break;
            case "put":
                request = this.http.put(url, bodyString, options);
                break;
            case "delete":
                request = this.http.delete(url, options);
                break;
        }

        return request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                // todo: log
                if (error.status == 500) {
                    alert(error._body);
                }

                return Observable.empty();
            });
    }

    private getUrl(url: string, isBase: boolean = false): string {
        let currentUrl: string = (isBase ? environment.baseUrl : ApiUrl) + url;
        let isFirstRun: boolean = true;

        return currentUrl;
    }
}
