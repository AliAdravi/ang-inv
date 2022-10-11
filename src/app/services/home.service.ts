import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IUserModel } from "../models/user-model";

@Injectable({
    providedIn: 'root'
})

export class HomeService {
    baseUrl = 'https://jsonplaceholder.typicode.com';
    public title: string = 'Home Service';

    constructor(private httpClient: HttpClient){}
    public getUsers = () =>
        this.httpClient.get<IUserModel[]>(`${this.baseUrl}/users`)

}