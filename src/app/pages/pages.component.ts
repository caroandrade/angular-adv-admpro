import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function customInitFunction(): void;


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {


  constructor( private settingServices: SettingService) { }

  ngOnInit(): void {

    customInitFunction();
     
}


    
     
     
     
    
     
    
    
    
  

}



