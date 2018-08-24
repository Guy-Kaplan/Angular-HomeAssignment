import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { MenuComponent } from '../components/menu/menu.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from '../pipes/filter.pipe';
import { Filter2Pipe } from '../pipes/filter2.pipe';
import { Filter3Pipe } from '../pipes/filter3.pipe';
import { Page404Component } from '../components/page404/page404.component';
import { MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Task1Component } from '../components/task1/task1.component';
import { Task2Component } from '../components/task2/task2.component';
import { Task3Component } from '../components/task3/task3.component';
import { Task4Component } from '../components/task4/task4.component';
import { Task5Component } from '../components/task5/task5.component';


@NgModule({
    declarations: [

        LayoutComponent,

        HeaderComponent,

        MenuComponent,

        HomeComponent,

        FilterPipe,

        Filter2Pipe,

        Filter3Pipe,

        Page404Component,

        Task1Component,

        Task2Component,

        Task3Component,

        Task4Component,

        Task5Component],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        RoutingModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatAutocompleteModule,
        BrowserAnimationsModule,

    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }


