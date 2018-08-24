import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(countries: any[], searchText: string): any {
        return countries.filter(str =>
            str.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }

}