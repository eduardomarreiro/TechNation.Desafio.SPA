import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements AfterViewInit, OnChanges {
  @Input() data!: any;
  @Input() title!: string;
  @Input() idChart!: string;
  @Output() settingsEvent = new EventEmitter<void>();

  private chart: any;

  ngAfterViewInit(): void {
    this.initializeCharts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].firstChange) {
      this.updateChart();
    }
  }

  initializeCharts() {
    this.createChart();
  }

  createChart() {
    const ctx = (document.getElementById(this.idChart) as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.data.labels,
          datasets: [{
            label: 'Notas Fiscais',
            data: this.data.data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
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

  updateChart() {
    if (this.chart) {
      this.chart.data.labels = this.data.labels;
      this.chart.data.datasets[0].data = this.data.data;
      this.chart.update();
    }
  }
  
  emitSettingsEvent() {
    this.settingsEvent.emit();
  }
}
