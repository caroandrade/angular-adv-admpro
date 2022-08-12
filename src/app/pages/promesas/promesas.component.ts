import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.getUsuario();

    this.getUsuario().then(usuarios =>{
      console.log( usuarios);
    })
 }
//uso de promesas   
//const promesa= new Promise((resolve,reject)=> {
    
//     if(false){
//       resolve('hola mundo')

//     }else{
//       reject('algo salió mal')
//     }

//   });

//   promesa.then((mensaje)=>{
//  console.log(mensaje)
//   })
//   .catch(error=> console.log('error en mi promesa', error))
//    console.log('Fin del init');
    
//  }
getUsuario(){

return  new Promise( resolve => {
  fetch('https://reqres.in/api/users')
  .then(resp=> resp.json() )
  .then(body=> console.log('body',body.data));
} );


  
  

}
}
