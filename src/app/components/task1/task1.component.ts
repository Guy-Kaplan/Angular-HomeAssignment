import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
    selector: 'app-task1',
    templateUrl: './task1.component.html',
    styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

    public tasks: Task[];
    public taskNum: number = 1;

    constructor(private tasksService: TasksService) { }

    ngOnInit() {
        this.tasksService.getAllTasks().subscribe((tasks) => {
            // Initialize tasks
            this.tasks = tasks;
            console.log(tasks);
        });

    }

    public loadNext(): void {
        if (this.taskNum !== 5) {
            this.taskNum++;
        }
        else {
            this.taskNum = 1; // carousel
        }
    }

    public loadPrev(): void {
        if (this.taskNum !== 1) {
            this.taskNum--;
        }
        else {
            this.taskNum = 5; // carousel
        }
    }

    public toMin(): void {
        this.taskNum = 1;

    }

    public toMid(): void {
        this.taskNum = 3;

    }

    public toMax(): void {
        this.taskNum = 5;

    }
}
