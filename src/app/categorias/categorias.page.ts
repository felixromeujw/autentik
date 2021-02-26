import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(private router: Router,private storage: Storage,private modalCtrl: ModalController,private geturl: ActivatedRoute,private http: HttpClient) { }
  url="https://dev.ideiasdinamicas.com/tt-nova-arquitectura-commerce";
  getdados(url:any,id:any){

    return this.http.get<any>(url+'/wp-json/wc/v3/products?category='+id+'&consumer_key=ck_6af260f4a52d1b77b151baf835b3c54cdf85cda2&consumer_secret=cs_80b1f23993ed1a66f49a0ea0e805f5152c39cf24');
    
      }

      dados2=[];
      private recipeId: any=0;
      cont_car:number=0;
  ngOnInit() {

    this.geturl.paramMap.subscribe(paramMap=>{
      if(!paramMap){}else{
     this.recipeId= paramMap.get('categoriasId')
     
console.log(this.recipeId);
      
    
      }
     
          })
    this.getdados(this.url,this.recipeId).subscribe(data=>{ console.log(data); this.dados2=data; });
 
    this.storage.get('cart').then((val) => {
      this.cont_car=val;
    });
     
  }

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

   carrinho(){

    this.router.navigate(['/carrinho'])
  }

}
