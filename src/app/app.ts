import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './services/first';
import { Second } from './second/second';
import { Cv } from './cv/cv';
import { HomeAccounts } from './accounts/home-accounts/home-accounts';
import { Direct } from './direct/direct';
import { ManageServers } from './manage-servers/manage-servers';
import { Recrues } from './recrues/recrues';

@Component({
    selector: 'app-root',
    imports: [Second, Cv, HomeAccounts, Direct, ManageServers, Recrues],
    templateUrl: './app.html',
    styleUrl: './app.css',
    providers: []
})
export class App {
    protected readonly title = signal('ng-sof-26');

    recupererMsg(msg: string) {
        console.log(msg);
    }
}
