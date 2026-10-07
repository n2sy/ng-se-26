import { Component } from '@angular/core';
import { AddAccount } from '../add-account/add-account';
import { Liste } from '../../liste/liste';
import { ItemAccount } from '../item-account/item-account';

@Component({
  selector: 'app-home-accounts',
  imports: [AddAccount, ItemAccount],
  templateUrl: './home-accounts.html',
  styleUrl: './home-accounts.css',
})
export class HomeAccounts {
  allAccounts = [
    {
      name: 'Naouress Account',
      status: 'active',
    },
    {
      name: 'Ghassen Account',
      status: 'inactive',
    },
  ];
}
