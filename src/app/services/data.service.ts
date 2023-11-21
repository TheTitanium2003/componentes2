import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { Componente } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuOpts(){
    return this.http.get<Componente[]>(
      '/assets/data/menu-opts.json');
  }
}
