import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  private recipeId: any=0;
  chave=[];
  q_produto=0;
  private imagem: any;


  constructor(private router: Router,private storage: Storage,private modalCtrl: ModalController,private geturl: ActivatedRoute,private http: HttpClient){ 

    this.storage.length().then((val) => {
      this.cont_car=val;
       });

  }

  ngOnInit() {

    this.geturl.paramMap.subscribe(paramMap=>{
      if(!paramMap){}else{
     this.recipeId= paramMap.get('detalhesId')
     
console.log(this.recipeId);
  }
});


this.getdados_item(this.url,this.recipeId).subscribe(data=>{ this.imagem=data.images[0].src; this.chave=data; });
 
console.log(this.chave);

}



url="https://dev.ideiasdinamicas.com/tt-nova-arquitectura-commerce";

getdados_item(url:any,id:any){

  return this.http.get<any>(url+'/wp-json/wc/v3/products/'+id+'?consumer_key=ck_6af260f4a52d1b77b151baf835b3c54cdf85cda2&consumer_secret=cs_80b1f23993ed1a66f49a0ea0e805f5152c39cf24');
  
    }




    cont_car:number=0;
    key:any=1;
    private temporarios2=[];
    private temporarios ={
      id:'',
      nome:'',
      preco:'',
      imgURL:'',
      quantidade:0,
      preco_sem:0
      
    }
    private total:number=0;
   
  
    item_salva(a:any){
  
      this.temporarios.id=a.id;
      this.temporarios.nome=a.name;
      this.temporarios.preco=a.price_html;
      this.temporarios.imgURL=a.images[0].src;
      this.temporarios.quantidade=this.q_produto;
      this.temporarios.preco_sem=a.price;
      this.total=Number(a.price)+this.total;
      console.log(this.total);
      this.cont_car++;
  
  
      console.log("cont:"+this.cont_car);
      this.storage.set("cart", this.cont_car); 
     
      this.temporarios2.push(this.temporarios);
      console.log("array:"+JSON.stringify(this.temporarios2)); 
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