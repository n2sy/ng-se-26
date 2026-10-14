import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  imports: [],
  templateUrl: './add-account.html',
  styleUrl: './add-account.css',
})
export class AddAccount {
    allOptions = ['', 'active', 'inactive', 'unknown'];
    // accName : string = '';
    // accStatus : string = '';
    @Output() eventToHomeAccounts = new EventEmitter();
    
    addNewAccount(nameValue : string, statusValue: string) {
        this.eventToHomeAccounts.emit(
            {
                name : nameValue,
                status : statusValue
            }
        )
    }
    
    
   
}
