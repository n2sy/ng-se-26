import { Component } from '@angular/core';
import { Item } from '../../item/item';
import { AddAccount } from '../add-account/add-account';
import { Liste } from '../../liste/liste';
import { ListAccounts } from '../list-accounts/list-accounts';

@Component({
  selector: 'app-home-accounts',
  imports: [Item, AddAccount, Liste, ListAccounts],
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
