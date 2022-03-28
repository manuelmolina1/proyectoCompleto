import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-descripcion-integrantes',
  templateUrl: './descripcion-integrantes.page.html',
  styleUrls: ['./descripcion-integrantes.page.scss'],
})
export class DescripcionIntegrantesPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

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
    
    
      }


  ngOnInit() {
  }

}
