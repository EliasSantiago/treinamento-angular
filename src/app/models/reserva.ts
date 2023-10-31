import { Cliente } from "../interfaces/cliente.interface";
import { Quarto } from "../interfaces/quarto.interface";

export class Reserva {
  constructor(public cliente: Cliente, public quarto: Quarto, public quantidadeDias: number) {

  }

  public valortotal(): number {
    return this.quarto.value * this.quantidadeDias;
  }

  public detalhesreserva(): string {
    return `Reserva feita por ${this.cliente.name} para um quarto ${this.quarto.type} por ${this.quantidadeDias} dias.${this.cliente.mensagem()} o valor total ficou: ${this.valortotal()}`
  }
}