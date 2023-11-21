import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
    backdropDismiss: false,
    header: 'Alert',
    subHeader: 'Important message',
    message: 'This is an alert!',
    buttons: ['OK']
    });
    await alert.present();
  };
  async presentAlertMultilpeButton() {
    const alert = await this.alertCtrl.create({
    backdropDismiss: false,
    header: 'Alert',
    subHeader: 'Important message',
    message: 'This is an alert!',
    buttons: ['Cancel', 'Opne Modal', 'Delete']
    });
    await alert.present();
    };    
  async presentAlertMultilpeButtonAction() {
    const alert = await this.alertCtrl.create({
    backdropDismiss: false,
    header: 'Alert',
    subHeader: 'Important message',
    message: 'This is an alert!',
    buttons: [
      {
        text: 'OK!',
        handler: () => {
          console.log('Click en OK!')
        }
      },
      /*
      {
        text: 'Cancelar',
        handler: () => {
          console.log('Click en Cancelar')
        }
      },
      */
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'rojo'
      }
    ]
    });
    await alert.present();    
 };
}