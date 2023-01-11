import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class battleapiService
{
    constructor(private httpclient: HttpClient){ }
    getgames(): Observable<any>{
        return this.httpclient.get("https://battleapi.herokuapp.com/api/games")
    }
}