import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialFormComponent } from "./components/material-form/material-form.component";
import { NgxChartsComponent } from "./components/ngx-charts/ngx-charts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialFormComponent, NgxChartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'external-libraries';
}
