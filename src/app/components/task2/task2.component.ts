import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';

@Component({
    selector: 'app-task2',
    templateUrl: './task2.component.html',
    styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
    public customers: Customer[];
    public allCountries: string[] = [];

    constructor(private customersService: CustomersService) { }

    ngOnInit() {
        this.customersService.getAllCustomers().subscribe((customers) => {
            // Initialize customers
            this.customers = customers;
            //Initialize all countries
            customers.forEach(element => {
                if (this.allCountries.includes(String(element.Country)) === false) {
                    this.allCountries.push(String(element.Country));
                }
            });
            
        });

        

    }



}


