import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {

subscribe:any;
  constructor(private alertCtrl:AlertController){}


  async btnclicked(){
 
    await this.alertCtrl.create({
    header:"Clase App Movil",
    
    message:"HAS SALISOD DE LA APLICACION",
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

validar(){

  console.log('ENVIADO')
}

async enviar(){
 
  await this.alertCtrl.create({
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
  
  console.log('ENVIADO')
    }
}
