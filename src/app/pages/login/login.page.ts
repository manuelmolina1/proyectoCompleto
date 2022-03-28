import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  face(){
 
     this.alertCtrl.create({
    header:"Clase App Movil",
    
    message:"HAS ACCEDIDO CON TU CUENTA DE FACEBOOK",
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

      go(){
 
        this.alertCtrl.create({
       header:"Clase App Movil",
       
       message:"HAS ACCEDIDO CON TU CUENTA DE GOOGLE",
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
