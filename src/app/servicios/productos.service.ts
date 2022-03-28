import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface product{

  id:number;
  nombre:String;
  fabricado:String;
  precio:number;
  cantidad:number;
  img:String;
  
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  data: product[]=[

{id:1,nombre:'Tenis Nike', fabricado:'Fabricado en USA',precio:150,cantidad:10, img:'../../src/assets/img/v.jpg'},
{id:2,nombre:'Tenis Mkalvin', fabricado:'Fabricado en Honduras', precio:80,cantidad:20, img:'../../src/assets/img/v.jpg'},
{id:3,nombre:'Tenis Adidas', fabricado:'Fabricado en USA', precio:200,cantidad:8, img:'../../src/assets/img/v.jpg'},
{id:4,nombre:'Tenis Ebay', fabricado:'Fabricado en Guatemala',precio:50,cantidad:15, img:'../../src/assets/img/v.jpg'},
{id:5,nombre:'Tenis SS-Senji', fabricado:'Fabricado en Panama',precio:70,cantidad:12, img:'../../src/assets/img/v.jpg'},
{id:6,nombre:'Tenis IEN-70', fabricado:'Fabricado en USA',precio:70,cantidad:35, img:'../../src/assets/img/v.jpg'},
{id:7,nombre:'Tenis Subtop', fabricado:'Fabricado en USA',precio:80,cantidad:17, img:'../../src/assets/img/v.jpg'},
{id:8,nombre:'Tenis Thomson', fabricado:'Fabricado en USA',precio:50,cantidad:50, img:'../../src/assets/img/v.jpg'},
  ]

  private carrito =[];
  private contadorItems = new BehaviorSubject(0);

  constructor() { }

obtenerProductos(){

return this.data;


}

}
