import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabla-trabajo',
  templateUrl: './tabla-trabajo.page.html',
  styleUrls: ['./tabla-trabajo.page.scss'],
})
export class TablaTrabajoPage implements OnInit {

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
