import { Component } from '@angular/core';





@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {
  public doughnutChartLabels: string[] = ["data1",'data2','data3'  ];

 public dat1= [ 350, 450, 100 ];
}
