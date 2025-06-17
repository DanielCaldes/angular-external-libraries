import { Component } from '@angular/core';
import { LineChartComponent } from "../line-chart/line-chart.component";
import { BarChartComponent } from "../bar-chart/bar-chart.component";

@Component({
  selector: 'app-chart-dashboard',
  standalone: true,
  imports: [LineChartComponent, BarChartComponent],
  templateUrl: './chart-dashboard.component.html',
  styleUrl: './chart-dashboard.component.scss'
})
export class ChartDashboardComponent {
  chartview : [number, number] = [700,300];
  chartColorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}
