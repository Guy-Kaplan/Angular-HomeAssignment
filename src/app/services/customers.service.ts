import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CustomersService {
    // DI
    public constructor(private httpClient: HttpClient) { }

    public getAllCustomers(): Observable<Customer[]> {
        //Returns Observable object:
        return this.httpClient.get<Customer[]>("./assets/json/customers.json");
    }
}
