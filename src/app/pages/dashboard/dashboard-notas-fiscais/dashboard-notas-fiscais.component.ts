import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LineChartComponent } from "../../../util/components/chart/line-chart/line-chart.component";
import { ProgressBarChartComponent } from "../../../util/components/chart/progress-bar-chart/progress-bar-chart.component";
import { TableComponent } from "../../../util/components/table/table.component";
import { BarChartComponent } from "../../../util/components/chart/bar-chart/bar-chart.component";
import { ApiService } from '../../../core/service/api-service';

@Component({
  selector: 'app-dashboard-notas-fiscais',
  standalone: true,
  imports: [LineChartComponent, ProgressBarChartComponent, TableComponent, BarChartComponent],
  templateUrl: './dashboard-notas-fiscais.component.html',
  styleUrls: ['./dashboard-notas-fiscais.component.css']
})

export class DashboardNotasFiscaisComponent implements OnInit {
  @Output() settingsEvent = new EventEmitter<void>();
  filters: any;
  // notasFiscais: { [key: string]: any } = {};
  notasFiscais: any;

  constructor(private api: ApiService<any>) {}

  ngOnInit(): void {
    this.getNotasFiscais();
  }

  getNotasFiscais() {
    const endpoints = [
      { key: 'emitidas', endpoint: 'NotasFiscais' },
      { key: 'emitidasSemCobranca', endpoint: 'NotasFiscais' },
      { key: 'vencidas', endpoint: 'NotasFiscais' },
      { key: 'aVencer', endpoint: 'NotasFiscais' },
      { key: 'pagas', endpoint: 'NotasFiscais' }
    ];

    endpoints.forEach(({ key, endpoint }) => {
      this.fetchNotasFiscais(key, endpoint);
    });
  }

  fetchNotasFiscais(key: string, endpoint: string) {
    this.api.get(endpoint, this.filters).subscribe({
      next: (result) => {
        this.notasFiscais[key] = result;
      },
      error: (err) => {
        console.error(`Error fetching ${key}:`, err);
      }
    });
  }

  emitSettingsEvent() {
    this.settingsEvent.emit();
  }

  //metodo para cor dos cards
}
