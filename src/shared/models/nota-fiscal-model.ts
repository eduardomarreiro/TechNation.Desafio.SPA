import { StatusNotaFiscal } from "./status-nota-fiscal";

export interface NotaFiscal {
    nomePagador: string;
    numeroIdentificacao: string;
    dataEmissao: Date;
    dataCobranca?: Date;
    dataPagamento?: Date;
    valor: number;
    documentoNotaFiscal: string;
    documentoBoletoBancario: string;
    idStatusNotaFiscal: number;
    statusNotaFiscal: StatusNotaFiscal;
  }
  