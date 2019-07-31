import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  vianense:[];
  guanabara:[];
  extra:[];
  carrefour:[];
  param:string;
  constructor(private carrinhoService : CarrinhoService) { }
  
  ngONInit(){
    this.consultaVianense();
  }
  consultaVianense(){
    return this.carrinhoService.getVianense().subscribe(
      data=>{
        this.vianense = data;
      }
    ).add();
  }
}
