import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value: any[], selectedStatus: string): any[] {
        if (!selectedStatus.length)
            return value;
        // let newTab = [];
        // for (const server of value) {
        //     if (server["status"] == selectedStatus)
        //         newTab.push(server)

        // }
        // return newTab
        return value.filter(serv => serv["status"] == selectedStatus)
    }
}
