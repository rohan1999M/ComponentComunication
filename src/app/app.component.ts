import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentComunication';

  clothes:Boolean = false;
  shoes:Boolean = false;
  moblie:Boolean = false;
  watches:Boolean = false;

  onClothes(){
    this.clothes = true;
    this.shoes = false;
   this.moblie = false;
   this.watches = false;
   localStorage.setItem('category','Clothes')
  }
  onShoes(){
    this.shoes =true;
    this.moblie = false;
   this.watches = false;
   this.clothes = false;
   localStorage.setItem('category','shoes');
  
  }
  onMobiles(){
    this.moblie = true;
   this.watches = false;
   this.shoes = false;
   this.clothes = false;
   localStorage.setItem('category','Mobiles')
  }
  onWatches(){
    this.watches =true;
    this.moblie = false;
   this.shoes = false;
   this.clothes = false;
   localStorage.setItem('category','watches')
  
  }
}
