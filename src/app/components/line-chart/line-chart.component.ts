import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts'; 
import { data } from './data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgxChartsModule, CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  @Input() colorScheme! : any;

  multi: any[] = data;
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  constructor() {
    Object.assign(this, { multi: data });
  }

  onSelect(data :any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data : any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data :any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
