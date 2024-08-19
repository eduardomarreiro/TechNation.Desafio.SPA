import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  filterText: string = '';
  filteredNotasFiscais: any[] = [];
  paginatedNotasFiscais: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

  ngOnInit() {
    this.filteredNotasFiscais = this.data;
    this.paginate();
  }

  filterNotasFiscais() {
    if (this.filterText) {
      this.filteredNotasFiscais = this.data.filter(notaFiscal =>
        notaFiscal.nomePagador.toLowerCase().includes(this.filterText.toLowerCase()) ||
        notaFiscal.numeroIdentificacao.toLowerCase().includes(this.filterText.toLowerCase())
        
      );
    } else {
      this.filteredNotasFiscais = this.data;
    }
    this.currentPage = 1;
    this.paginate();
  }

  paginate() {
    this.totalPages = Math.ceil(this.filteredNotasFiscais.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedNotasFiscais = this.filteredNotasFiscais.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }

  goToPage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginate();
    }
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
