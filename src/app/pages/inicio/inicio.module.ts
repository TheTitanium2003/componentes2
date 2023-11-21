import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MenuController } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    InicioPage
  ],
  providers:[
    MenuController
    
  ]
})
export class InicioPageModule {}
