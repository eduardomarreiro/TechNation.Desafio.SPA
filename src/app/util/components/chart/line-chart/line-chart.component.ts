import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() data!: any;
  @Input() title!: string;
  @Input() idChart!: string;
  @Output() settingsEvent = new EventEmitter<void>();

  private chart: any;

  ngOnInit(): void { }

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
        type: 'line',
        data: {
          labels: this.data.labels,
          datasets: [{
            label: 'Notas Fiscais',
            data: this.data.data,
            borderColor: '#5549A6',
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
              beginAtZero: true,
              ticks: {
                callback: function (value: string | number) {
                  if (typeof value === 'number') {
                    return `R$ ${value.toLocaleString()}`;
                  }
                  return value;
                }
              }
            }
          }
        }
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
