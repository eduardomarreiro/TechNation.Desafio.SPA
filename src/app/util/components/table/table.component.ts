import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotaFiscal } from '../../../../shared/models/nota-fiscal-model';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { StatusNotaFiscal } from '../../../../shared/models/status-nota-fiscal';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  filterText: string = '';
  notasFiscais: NotaFiscal[] = [];
  filteredNotasFiscais: NotaFiscal[] = [];

  ngOnInit() {
    this.filteredNotasFiscais = this.notasFiscais;
    this.filterNotasFiscais();
  }

  filterNotasFiscais() {
    if (this.filterText) {
      this.filteredNotasFiscais = this.notasFiscais.filter(notaFiscal =>
        notaFiscal.nomePagador.toLowerCase().includes(this.filterText.toLowerCase()) ||
        notaFiscal.numeroIdentificacao.toLowerCase().includes(this.filterText.toLowerCase())
      );
    } else {
      this.filteredNotasFiscais = this.notasFiscais;
    }
  }
}
