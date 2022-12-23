import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http : HttpClient) { }

   getDataFlipkart(){
    return this.http.get('http://localhost:3000/flipkart');
   }

   postDataFlipKart(body:any){
    return this.http.post('http://localhost:3000/flipkart',body);
   }

   updateDataFlipKart(id:number,body:any){
    return this.http.put('http://localhost:3000/flipkart/'+id,body);
   }

   deleteDataFiipKart(id:number){
      return this.http.delete('http://localhost:3000/flipkart/'+id);
   }


   getDataAmazon(){
    return this.http.get('http://localhost:3000/amazon');
   }

   postDataAmazon(body:any){
    return this.http.post('http://localhost:3000/amazon',body);
   }

   updateDataAmazon(id:number,body:any){
    return this.http.put('http://localhost:3000/amazon/'+id,body);
   }

   deleteDataAmazon(id:number){
      return this.http.delete('http://localhost:3000/amazon/'+id);
   }

   getDataMintrat(){
    return this.http.get('http://localhost:3000/Mintra');
   }

   postDataMintra(body:any){
    return this.http.post('http://localhost:3000/Mintra',body);
   }

   updateDataMintra(id:number,body:any){
    return this.http.put('http://localhost:3000/Mintra/'+id,body);
   }

   deleteDataMintra(id:number){
      return this.http.delete('http://localhost:3000/Mintra/'+id);
   }
}
