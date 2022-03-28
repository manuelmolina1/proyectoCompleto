import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-descripcion-aplicacion',
  templateUrl: './descripcion-aplicacion.page.html',
  styleUrls: ['./descripcion-aplicacion.page.scss'],
})
export class DescripcionAplicacionPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }

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
