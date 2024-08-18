import { Pipe, PipeTransform } from '@angular/core';
import { StatusNotaFiscal } from '../../util/models/status-nota-fiscal'

@Pipe({
  name: 'statusNotaFiscal'
})
export class StatusNotaFiscalPipe implements PipeTransform {
  transform(value: StatusNotaFiscal): string {
    switch (value) {
      case StatusNotaFiscal.Emitida:
        return 'Issued';
      case StatusNotaFiscal.CobrancaRealizada:
        return 'Charge Completed';
      case StatusNotaFiscal.PagamentoEmAtraso:
        return 'Payment Delayed';
      case StatusNotaFiscal.PagamentoRealizado:
        return 'Payment Completed';
      default:
        return 'Unknown';
    }
  }
}
