import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  imports: [NgClass],
  templateUrl: './manage-servers.html',
  styleUrl: './manage-servers.css',
})
export class ManageServers {
    allServers = [
        {
            name : 'Production Server',
            type : "small",
            status : "critical",
            date : new Date(2024, 5, 6)
        },
        {
            name : 'Development Test Server',
            type : "large",
            status : "stable",
            date : new Date(2024, 5, 6)
        },
        {
            name : 'Development Server',
            type : "small",
            status : "offline",
            date : new Date(2024, 5, 6)
        },
        {
            name : 'Nidhal Server',
            type : "medium",
            status : "stable",
            date : new Date(2024, 5, 6)
        },
    ];
    
    affecterClasse(st : string) {
        return {
            'list-group-item-danger' : st == 'critical' ,
            'list-group-item-success' : st == 'stable' ,
            'list-group-item-warning' :st == 'offline' ,
        }
    }
}
