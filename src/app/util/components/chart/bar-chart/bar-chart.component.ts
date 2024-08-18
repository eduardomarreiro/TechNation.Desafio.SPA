import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements AfterViewInit {
  @Input() data!: any;
  @Input() title!: string;
  @Input() idChart!: string;
  @Output() settingsEvent = new EventEmitter<void>();
  
  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    const ctx = (document.getElementById(this.idChart) as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: this.data,
        options: {          
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },        
      });
    }
  }

  emitSettingsEvent() {
    this.settingsEvent.emit();
  }
}
