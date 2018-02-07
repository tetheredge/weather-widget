import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {

    constructor(private jsonp: Jsonp, private http: Http ) { }

    getCurrentLocation(): Observable<any> {
        if (navigator.geolocation) {
            return Observable.create(observer => {
                    navigator.geolocation.getCurrentPosition(pos => {
                        observer.next(pos);
                    }),
                        err => {
                            return Observable.throw(err);
                        }
            });
        } else {
            console.error('Geolocation is not available');
            return Observable.throw('Geolocation is not avaialable');
        }
    }

    getCurrentWeather(lat: number, long: number): Observable<any> {
        const url = environment.forecastRoot + environment.forecastKey + '/' + lat + ',' + long;
        const queryParams = '?callback=JSONP_CALLBACK';

        return this.jsonp.get(url + queryParams)
        .map(data => data.json())
        .catch(err => {
            console.error('Unable to get weather data =', err);
            return Observable.throw(err.json());
        });
    }

    getLocationName(lat: number, long: number): Observable<any> {
        const url = environment.googleRoot;
        const queryParams = '?latlng=' + lat + ',' + long + '&key=' + environment.googleKey;

        return this.http.get(url + queryParams)
            .map(loc => loc.json())
            .catch(err => {
                console.error('Unable to get location -', err);
                return Observable.throw(err);
            });
    }

    getLastUpdate(): Observable<any> {
        const last = new Date().toLocaleString();
        return Observable.create(function(observer) {
            observer.next(last);
        });
    }
}
