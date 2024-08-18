import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar-chart.component.html',
  styleUrl: './progress-bar-chart.component.css'
})
export class ProgressBarChartComponent implements OnInit {
  @Input() data!: any;

  ngOnInit(): void {
    
  }

}
