import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],

})
export class CarrinhoPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private router: Router) { }


  finalizar(){
 
    this.router.navigate(['/finalizar'])
  }


  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  

  ngOnInit() {
  }

}
