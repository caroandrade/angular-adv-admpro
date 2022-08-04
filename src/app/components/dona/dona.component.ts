import { Component, Input} from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {
@Input()title:string ="sin titulo"


  @Input()doughnutChartLabels:String[]=["casa","auto","radio"] ;

 
  
 // Doughnut
 //public doughnutChartLabels: string[] = ["data1",'data2','data3'  ]
 public doughnutChartData: ChartData<'doughnut'> = {
   labels: this.doughnutChartLabels,
   datasets: [
     { data: [ 350, 450, 100 ],
      backgroundColor: ['#6857e6', '#009Fee','#f02059'] 
    
    } 
   ]
 };
 public doughnutChartType: ChartType = 'doughnut';

 // events
 public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
   console.log(event, active);
 }
  
 

}
