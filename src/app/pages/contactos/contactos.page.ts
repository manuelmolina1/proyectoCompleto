import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {



 

  constructor (
    private alertCtrl:AlertController
  ) { }



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
  ENVIAR(){
 
     this.alertCtrl.create({
    header:"Clase App Movil",
    
    message:"ENVIADO CORRECTAMENTE",
    inputs:[
    
      
    ],
    buttons:[
    {
      text:"ACEPTAR", handler:(res) =>{}
    },
    
    
    ]
    
    }).then((res=>  res.present()));
    
    
      }
}
