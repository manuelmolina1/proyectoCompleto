import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductosService } from '../../servicios/productos.service';
import { product } from '../../servicios/productos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage {


  carrito=[];
  products=[];
  contadorItems: BehaviorSubject<number>;

  constructor(private producto:ProductosService, private alertCtrl:AlertController) { }

  ngOnInit(){

    this.products = this.producto.obtenerProductos();
  }


abrircarrito(){

console.log("abrir")
}
 
exitApp(){}

async btnclicked(){
 
  await this.alertCtrl.create({
  header:"Clase App Movil",
  
  message:"HAS SALIDO DE LA APLICACION",
  inputs:[
  
    
  ],
  buttons:[
  {
    text:"ACEPTAR", handler:(res) =>{}
  },
  
  
  ]
  
  }).then((res=>  res.present()));
  
  href:"about:blank";
    }

}

