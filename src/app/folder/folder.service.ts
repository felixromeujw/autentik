import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private produtos =[{
    id:'1',
    nome:'Mesa de Centro Dália',
    preco:'40.000,00 kz',
    imgURL:'https://dev.ideiasdinamicas.com/tt-nova-arquitectura-commerce/wp-content/uploads/2020/07/mesa_Centro_dalia_castanho_claro2.jpg'

    
  },{
    id:'2',
    nome:'Mesa de Jantar Turquesa – Laminado Carvalho',
    preco:'87.141,00 Kz',
    imgURL:'https://dev.ideiasdinamicas.com/tt-nova-arquitectura-commerce/wp-content/uploads/2020/07/mesa_cozinha_turquesa_castanho_claro.jpg'

  },{
    id:'3',
    nome:'Aparador Ágata – Laminado Wengué',
    preco:'59.000,00 Kz',
    imgURL:'https://dev.ideiasdinamicas.com/tt-nova-arquitectura-commerce/wp-content/uploads/2020/07/mesa_centro_cascata2.jpg'

  },{
    id:'4',
    nome:'Aparador River',
    preco:'101.095,00 Kz',
    imgURL:'https://dev.ideiasdinamicas.com/tt-nova-arquitectura-commerce/wp-content/uploads/2020/07/aparador_river.jpg'

  }]
  constructor() { }
}
