import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  rows:any = []; 
  constructor() { }
 
@Input() site!:string

  ngOnInit(): void {
  
  this.rows = [{
  Item:"",
  Quantity:"",
  Price:"",
  TotalPrice:"",
  }]
}


// add and delete for Flipkart
addRow() {
  let row = {Item: "", Quantity: "",Price:"",TotalPrice:""};
  this.rows.unshift(row);
  this.MakeTotal()
  }
  
  deleteRow(index:number) {
    this.rows.splice(index , 1)
    this.MakeTotal();
  // if(this.rows.index > 1){
  // this.rows.splice(index, 1);
  // }
  // else{
  //   alert("you dont have acces to delete")
  // }
  }

  // site:string = '';
  TotalAmount:Number=0;
  qty:Number=0;

  object:any = {}

  MakeTotal(){
    console.log("called");
    this.qty=0;
    this.TotalAmount=0;
    for(let i of this.rows){
      this.TotalAmount=Number(this.TotalAmount)+Number((i.Quantity)*(i.Price));
      this.qty=Number(this.qty)+Number(i.Quantity);
      console.log("total price"+ this.TotalAmount + " ," + "quantiy ",this.qty);
      this.object.siteName = this.site;
      this.object.total = this.TotalAmount;
      this.object.Qty = this.qty;
      console.log(this.object)
      
    } 
  }
  
}
