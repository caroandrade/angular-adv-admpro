import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { pagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';



const routes: Routes=[
  
 
 //paht:'/dashbiard' PagesRouting
 //paht 'auth' AutRouting
  
 { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  {path: '**', component: NopagefoundComponent}
]

@NgModule({
 
  imports: [ 
    RouterModule.forRoot( routes ),
    pagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
