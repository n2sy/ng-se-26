import { CurrencyPipe, DatePipe, NgClass, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ShortPipe } from '../pipes/short-pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter-pipe';

@Component({
    selector: 'app-manage-servers',
    imports: [NgClass, UpperCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, FilterPipe, ShortPipe, FormsModule],
    templateUrl: './manage-servers.html',
    styleUrl: './manage-servers.css',
})
export class ManageServers {
    inputStatus: string = "";
    allServers = [
        {
            name: 'Production Server',
            type: "small",
            status: "critical",
            date_d: new Date(2024, 5, 6)
        },
        {
            name: 'Development Test Server',
            type: "large",
            status: "stable",
            date_d: new Date(2024, 5, 6)
        },
        {
            name: 'Development Server',
            type: "small",
            status: "offline",
            date_d: new Date(2024, 5, 6)
        },
        {
            name: 'Nidhal Server',
            type: "medium",
            status: "stable",
            date_d: new Date(2024, 5, 6)
        },
    ];

    addServer() {
        this.allServers.push({
            name: 'NEW SERVER',
            type: "medium",
            status: "stable",
            date_d: new Date(2024, 5, 6)
        })
    }

    affecterClasse(st: string) {
        return {
            'list-group-item-danger': st == 'critical',
            'list-group-item-success': st == 'stable',
            'list-group-item-warning': st == 'offline',
        }
    }
}
