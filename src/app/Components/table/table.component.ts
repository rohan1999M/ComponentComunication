import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  itemWithPrice = [
    { itemname: 'a', price: 100 },
    { itemname: 'b', price: 200 },
    { itemname: 'c', price: 300 },
    { itemname: 'd', price: 400 },
  ];


  rows: Array<{ Item: string; Quantity: number; TotalPrice: number }> = [ ];

  constructor() {}

  @Input() siteName!: string;
  @Input() category!: string;

  ngOnInit(): void {}
  priceOfItem = 0;
  itemName = '';
  itemQuantity = 0;
  // add and delete for Flipkart
  addRow() {
    let row = { Item: '', Quantity: 0, TotalPrice: 0 };
    let temp =
      this.itemWithPrice.filter((x) => {
        return x.itemname == this.itemName.toLowerCase();
      }).length > 0;

    if (temp) {
      row.Item = this.itemName.toLowerCase();
      row.TotalPrice =
        this.itemWithPrice.filter((x) => {
          return x.itemname.toLocaleLowerCase() == this.itemName;
        })[0].price * this.itemQuantity;
      row.Quantity = this.itemQuantity;
      this.rows.push(row);
    }
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
    // this.MakeTotal();

  }


  // TotalAmount: Number = 0;
  // qty: Number = 0;

  object: any = {};
  // DataAmazon = [{ item: 'Shirts', price: 120 }];

  // MakeTotal() {
 
  // }
}
