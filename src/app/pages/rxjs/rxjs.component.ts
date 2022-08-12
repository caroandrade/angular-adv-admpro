import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

ngOnDestroy(): void {
  this.intervalSub$.unsubscribe();
}
  public intervalSub$: Subscription;
  
  constructor() {


    

// this.retornaObservable().pipe(
//   retry()
// )
//  this.retornaObservable().subscribe(
//   valor => console.log('susbcripciones', valor),
  
//  );


// this.retornaIntervalo().subscribe(
//   (valor)=> console.log( valor )
// )
  //lo anterior lo puedo reemplazar por una sola linea de código
 this.intervalSub$ =  this.retornaIntervalo().subscribe(console.log);
  }

// retornaIntervalo(){
//   const Interval$ = interval(1000).pipe(
//     take(4),
//     map( valor =>{ 
      
//       return 'hola mundo ' + valor})
//   );
//   return Interval$
// }

// puedo limpiar el código aterior en esto
 retornaIntervalo():Observable<number>{

 return  interval(500).pipe(
   // take(10),
   
    map( valor => valor +1 ),
    filter( valor => (valor % 2 === 0)? true: false)
  );
  
}
  retornaObservable(): Observable<number>{
    let i= 0
   
    const obs$ = new Observable<number> ( observer => {
    
      const intervalo=  setInterval( () => { 
        i++;
       observer.next(i);
       
       if(i===4){
        clearInterval(intervalo);
        observer.complete();
       }
     if ( i===2){
      observer.error(' llego al valor 2');
     }

    }, 1000)

   });
   return obs$
  }

}
