import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'contactos',
    loadChildren: () => import('./pages/contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'descripcion-aplicacion',
    loadChildren: () => import('./pages/descripcion-aplicacion/descripcion-aplicacion.module').then( m => m.DescripcionAplicacionPageModule)
  },
  {
    path: 'descripcion-integrantes',
    loadChildren: () => import('./pages/descripcion-integrantes/descripcion-integrantes.module').then( m => m.DescripcionIntegrantesPageModule)
  },
  {
    path: 'tabla-trabajo',
    loadChildren: () => import('./pages/tabla-trabajo/tabla-trabajo.module').then( m => m.TablaTrabajoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'comentario',
    loadChildren: () => import('./pages/comentario/comentario.module').then( m => m.ComentarioPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
