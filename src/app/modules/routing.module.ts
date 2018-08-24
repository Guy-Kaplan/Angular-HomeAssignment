import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { Task1Component } from '../components/task1/task1.component';
import { Task2Component } from '../components/task2/task2.component';
import { Task3Component } from '../components/task3/task3.component';
import { Task4Component } from '../components/task4/task4.component';
import { Task5Component } from '../components/task5/task5.component';
import { Page404Component } from '../components/page404/page404.component';





const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "task1", component: Task1Component },
    { path: "task2", component: Task2Component },
    { path: "task3", component: Task3Component },
    { path: "task4", component: Task4Component },
    { path: "task5", component: Task5Component },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {path: "**", component: Page404Component},

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    declarations: []
})
export class RoutingModule { }
