import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './api.service';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import{ CarrinhoService} from '../carrinho.service';
import { from } from 'rxjs';
/**import{ApiService} from './api.service';*/
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

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
 dados=[];
 cont_car:number=0;
 url="https://dev.ideiasdinamicas.com/tt-nova-arquitectura-commerce";
  constructor(private activatedRoute: ActivatedRoute,private storage: Storage,private router: Router,private api: ApiService,private modalCtrl: ModalController) { }

  ngOnInit(){
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getdados(this.url).subscribe(data=>{ console.log(data); this.dados=data;});
    
    this.storage.get('cart').then((val) => {
      this.cont_car=val;
    });
  
  
  }
 
  ionViewWillEnter(){

  
    this.storage.get('cart').then((val) => {
      this.cont_car=val;
    });

    
  }
/*
  ionViewWillLeave(){
 

    /*this.storage.get('cart').then((val) => {
      this.cont_car=val;
    });

    alert(4);
  }

  ionViewDidLeave(){

    alert(6);
  }*/
  
  carrinho(){

    this.router.navigate(['/carrinho'])
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay:true,
   
  };
  async openModal(a){

    const modal= await this.modalCtrl.create({
 component:ModalComponent,
 componentProps:{infor:a}
     });
     await modal.present();
     {
       } 
   
     //console.log(modal);
 //alert();
 
   }
  
}
