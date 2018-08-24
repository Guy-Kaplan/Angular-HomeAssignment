import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    // DI
    public constructor(private httpClient: HttpClient) { }

    public getAllTasks(): Observable<Task[]> {
        //Returns Observable object:
        return this.httpClient.get<Task[]>("./assets/json/home_assignment.json");
    }
}
