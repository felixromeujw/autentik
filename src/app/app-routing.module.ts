import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'detalhes',
    children:[{
      path: '',
    loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },{

    path: ":detalhesId",
    loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)


  }


]
 },
  {
    path: 'finalizar',
    loadChildren: () => import('./finalizar/finalizar.module').then( m => m.FinalizarPageModule)
  },
  {
    path: 'categorias',
    children:[{
      path: '',
      loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)

    },{

      path: ":categoriasId",
      loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)


    }
  
  
  ]
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
