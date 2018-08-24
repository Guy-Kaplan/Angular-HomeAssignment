import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter3'
})
export class Filter3Pipe implements PipeTransform {
    transform(items: any[], term: number): any {
        return items.filter(item =>
            item.taskNumber === term);
    }


}