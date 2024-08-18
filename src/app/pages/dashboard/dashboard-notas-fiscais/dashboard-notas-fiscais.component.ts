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
  notasFiscais: { [key: string]: any } = {};

  constructor(private api: ApiService<any>) {}

  ngOnInit(): void {
    debugger
    this.getNotasFiscais();
    console.log("🚀 ~ DashboardNotasFiscaisComponent ~ ngOnInit ~ result:", this.notasFiscais)
  }

  getNotasFiscais() {
    debugger
    const endpoints = [
      { key: 'emitidas', endpoint: 'NotaFiscal' },
      { key: 'emitidasSemCobranca', endpoint: 'NotaFiscal' },
      { key: 'vencidas', endpoint: 'NotaFiscal' },
      { key: 'aVencer', endpoint: 'NotaFiscal' },
      { key: 'pagas', endpoint: 'NotaFiscal' }
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

}
