import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import{ CarrinhoService} from '../carrinho.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  cont_car:number=0;
  key:any=1;
  private temporarios ={
    id:'',
    nome:'',
    preco:'',
    imgURL:'',
    quantidade:0,
    preco_sem:0
    
  }
  private total:number=0;
  constructor(private modalCtrl: ModalController,private storage: Storage,private router: Router) { 


    
  }

  item_salva(a:any){

    this.temporarios.id=a.id;
    this.temporarios.nome=a.name;
    this.temporarios.preco=a.price_html;
    this.temporarios.imgURL=a.images[0].src;
    this.temporarios.quantidade=this.q_produto;
    this.temporarios.preco_sem=a.price;
    this.total=Number(a.price)+this.total;
    console.log(this.total);
   
    this.storage.length().then((val) => {
   this.cont_car++;
    });

    console.log("cont:"+this.cont_car);
    this.storage.set("cart", this.cont_car);  
    this.router.navigate(['/carrinho']);
//this.storage.set(this.key, 'Ma');
}

mostrar(){
// Or to get a key/value pair

this.storage.get('felix').then((val) => {
  console.log('Your age is', val);
});

}
  disimssModal(){

this.modalCtrl.dismiss();

  }

  q_produto=0;


  adicionar() {
  

      this.q_produto++;
      
   
  }
  reduzir() {

    if(this.q_produto>0){
    this.q_produto--;
    }
  }

  formatLabel(value: number) {
   
alert(value);
    return value;
  }
  fechar(quantidade){

   console.log(quantidade);
  }


 

  ionViewWillLeave(){
    

    this.storage.get('cart').then((val) => {
      this.cont_car=val;
    });
   
  
  }



}
