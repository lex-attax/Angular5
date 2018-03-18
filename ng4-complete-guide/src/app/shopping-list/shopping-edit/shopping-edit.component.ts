import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  addToList(nameInput, amountInput) {
    console.log(nameInput);
    console.log(amountInput);
  }

}
