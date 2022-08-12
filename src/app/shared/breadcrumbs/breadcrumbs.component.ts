import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

ngOnDestroy(): void {
  this.tituloSub$.unsubscribe();

}

  public titulo:string="";
  public tituloSub$: Subscription =   Subscription.EMPTY ;


  constructor( private router: Router) { 
   this.tituloSub$  = this.getArgumentosRuta()
        .subscribe( ({titulo}) =>{
          this.titulo = titulo;
          document.title = `AdminPro - ${titulo}`;


        });
      }

getArgumentosRuta(){

  return this.router.events
  .pipe(
    filter((event: any) => event instanceof ActivationEnd ),
     filter((event: ActivationEnd) => event.snapshot.firstChild ===null),
     map((event:ActivationEnd)=> event.snapshot.data),
     
     )


      
       
    
   }
}
