import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { LineChartComponent } from "../../../util/components/chart/line-chart/line-chart.component";
import { ProgressBarChartComponent } from "../../../util/components/chart/progress-bar-chart/progress-bar-chart.component";
import { TableComponent } from "../../../util/components/table/table.component";
import { BarChartComponent } from "../../../util/components/chart/bar-chart/bar-chart.component";
import { ApiService } from '../../../core/service/api-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-dashboard-notas-fiscais',
  standalone: true,
  imports: [
    LineChartComponent,
    ProgressBarChartComponent,
    TableComponent,
    BarChartComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './dashboard-notas-fiscais.component.html',
  styleUrls: ['./dashboard-notas-fiscais.component.css']
})

export class DashboardNotasFiscaisComponent implements OnInit {
  @Output() settingsEvent = new EventEmitter<void>();
  @ViewChild('settingsModal', { static: false }) settingsModal!: ElementRef;
  filtersForm: FormGroup;
  filters: any;
  statusNotaFiscal: any;
  cardNotasFiscais: any;
  lineChart: any;
  barChart: any;
  table: any;


  constructor(private api: ApiService<any>, private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      DataEmissaoDe: [],
      DataEmissaoAte: [''],
      DataCobrancaDe: [''],
      DataCobrancaAte: [''],
      DataPagamentoDe: [''],
      DataPagamentoAte: [''],
      IdStatusNotaFiscal: ['']
    });
  }

  ngOnInit(): void {
    this.getStatusNotaFiscal();
    this.getInfoLineChart(this.filters);
    this.getInfoBarChart(this.filters);
    this.getInfoTable(this.filters);

    this.filtersForm.valueChanges.subscribe(values => {
      this.filters = { ...values };
    });
    this.getInfoCards(this.filters);
  }

  onFilter(filter: any) {
    this.getInfoCards(this.filtersForm.value);
    this.getInfoLineChart(filter);
    this.getInfoBarChart(filter);
    this.getInfoTable(filter);
  }

  getInfoCards(filters: any) {
    this.closeSettingsModal()
    this.api.get_route('NotaFiscal', 'GetQtdNotasPorCategoria', this.filtersForm.value).subscribe({
      next: (value) => {
        this.cardNotasFiscais = value;
      },
      error: (err) => {
      },
    });
  }

  getStatusNotaFiscal() {
    this.api.get('StatusNotaFiscal').subscribe({
      next: (value) => {
        this.statusNotaFiscal = value;
      },
      error(err) {
      },
    })
  }

  getInfoLineChart(filters: any) {

    this.api.get_route('NotaFiscal', 'GetInadimplenciaMensal', filters).subscribe({
      next: (value) => {
        this.lineChart = value;
      },
      error: (err) => {
      },
    });

  }

  getInfoBarChart(filters: any) {
    this.api.get_route('NotaFiscal', 'GetReceitaMensal', filters).subscribe({
      next: (value) => {
        this.barChart = value;
      },
      error: (err) => {
      },
    });
  }

  getInfoTable(filters: any) {
    this.api.get_route('NotaFiscal', 'GetInfoTableDashboard', filters).subscribe({
      next: (value) => {
        this.table = value;
        console.log("🚀 ~ DashboardNotasFiscaisComponent ~ this.api.get_route ~ this.table:", this.table)
        
      },
      error: (err) => {
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
  closeSettingsModal() {
    const modal = bootstrap.Modal.getInstance(this.settingsModal?.nativeElement);
    modal?.hide();
  }
}
