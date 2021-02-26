import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from './folder/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;

  public menu=[];
  public appPages = [
    {
      title: 'Início',
      url: '/folder/Autentik',
     
    },
    {
      title: 'Aparadores',
      url: '/folder/Aparadores',
      
    },
    {
      title: 'Camas e similares',
      url: '/folder/Camas e similares',
 
    },
    {
      title: 'Decorativos',
      url: '/folder/Decorativos',
     
    },
    {
      title: 'Exterior',
      url: '/folder/Exterior',
     
    },
    {
      title: 'Mesas',
      url: '/folder/Exterior',
      
    },
    {
      title: 'Racks',
      url: '/folder/Racks',
     
    },
    {
      title: 'Roupeiros',
      url: '/folder/Roupeiros',
      
    },
    {
      title: 'Sistemas de arrumação',
      url: '/folder/Sistemas de arrumação',
      
    },
    {
      title: 'Objectos de decoração',
      url: '/folder/Objectos de decoração',
      
    }
  ];
  url="https://dev.ideiasdinamicas.com/tt-nova-arquitectura-commerce";
 
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {


  
  
    const path = window.location.pathname.split('folder/')[1];
   
    
    if (path !== undefined) {

    
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
      
    
    }

    this.api.getcategoria(this.url).subscribe(data=>{ console.log(data); this.menu=data;});
 

  }
}
