import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Observable<Componente[]> | undefined;
  
  constructor(private menuCtrl: MenuController,
    private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
    
  }
  mostrarMenu(){
    this.menuCtrl.open("first");
  }

}
