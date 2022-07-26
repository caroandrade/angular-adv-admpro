import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule({
  declarations: [
      DashboardComponent,
      ProgressComponent,
      Grafica1Component,
      PagesComponent,
      AccountSettingComponent,
      PromesasComponent,
      RxjsComponent],
  imports: [   
    CommonModule,  
    FormsModule,
    AppRoutingModule, 
    SharedModule,
    ComponentsModule,
    
  ],
  exports:[
      DashboardComponent,
      ProgressComponent,
      Grafica1Component,
      PagesComponent,
      AccountSettingComponent,
      ProgressComponent

  ]

})
export class PagesModule { }
