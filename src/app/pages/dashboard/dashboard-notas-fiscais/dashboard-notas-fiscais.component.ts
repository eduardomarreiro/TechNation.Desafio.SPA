import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { LineChartComponent } from "../../../util/components/chart/line-chart/line-chart.component";
import { ProgressBarChartComponent } from "../../../util/components/chart/progress-bar-chart/progress-bar-chart.component";
import { TableComponent } from "../../../util/components/table/table.component";
import { BarChartComponent } from "../../../util/components/chart/bar-chart/bar-chart.component";
import { ApiService } from '../../../core/service/api-service';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-dashboard-notas-fiscais',
  standalone: true,
  imports: [LineChartComponent, ProgressBarChartComponent, TableComponent, BarChartComponent, FormsModule],
  templateUrl: './dashboard-notas-fiscais.component.html',
  styleUrls: ['./dashboard-notas-fiscais.component.css']
})

export class DashboardNotasFiscaisComponent implements OnInit {
  @Output() settingsEvent = new EventEmitter<void>();
  @ViewChild('settingsModal', { static: false }) settingsModal!: ElementRef;
  filters: any = {};
  cardNotasFiscais: any;

  constructor(private api: ApiService<any>) {}

  ngOnInit(): void {  
    this.getInfoCards()
  }

  getInfoCards() {
    this.api.get_route('NotaFiscal', 'GetQtdNotasPorCategoria', this.filters).subscribe({
      next: (value) => {
        this.cardNotasFiscais = value;
      },
      error: (err) => {
        console.log("🚀 ~ DashboardNotasFiscaisComponent ~ error ~ err:", err);
      },
    });
  }
  

  emitSettingsEvent() {
    this.openSettingsModal();
    this.settingsEvent.emit();
  }

  openSettingsModal() {
    const settingsModal = new bootstrap.Modal(document.getElementById('settingsModal'), {
      keyboard: false
    });
    settingsModal.show();
  }

}
