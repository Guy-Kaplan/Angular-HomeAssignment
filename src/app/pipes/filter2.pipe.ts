import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {
    transform(countries2: any[], searchText2: string): any {
        return countries2.filter(country =>
            country.Country.toLowerCase().indexOf(searchText2.toLowerCase()) !== -1 ||
            country.City.toLowerCase().indexOf(searchText2.toLowerCase()) !== -1);
    }


}