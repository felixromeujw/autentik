import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private pcarrinho =[{
    id:'1',
    nome:'Mesa de Centro Dália',
    preco:'40.000,00 kz',
    imgURL:'https://dev.ideiasdinamicas.com/tt-nova-arquitectura-commerce/wp-content/uploads/2020/07/mesa_Centro_dalia_castanho_claro2.jpg'
    ,quntidade:0
    
  }]
  constructor() { }
  fechar(){

    alert(8);
  }
 
}
