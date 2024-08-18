import { AfterViewInit, Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements AfterViewInit {
  @Input() data!: any;
  @Input() title!: string;
  @Input() idChart!: string;
  @Output() settingsEvent = new EventEmitter<void>();
  
  ngAfterViewInit(): void {
    this.createChart();
  }

  initializeCharts() {

  }

  createChart() {
    const ctx = (document.getElementById(this.idChart) as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            label: 'Notas Fiscais',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
          }]
        },
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
  emitSettingsEvent() {
    this.settingsEvent.emit();
  }
}
