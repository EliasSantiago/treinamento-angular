import { Component } from '@angular/core';
import { ClienteNormal } from './models/clienteNormal';
import { QuartoSimples } from './models/quartoSimples';
import { Reserva } from './models/reserva';
import { Quarto } from './interfaces/quarto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-treinamento';
  cliente     = {nome: ''};
  tipoCliente = 'normal';
  quarto!: Quarto;
  tipoQuarto = '';
  quantidadeDias!: number;

  ngOnInit() {
    let cliente = new ClienteNormal('Elias', 'Normal');
    let quarto  = new QuartoSimples();
    let reserva = new Reserva(cliente, quarto, 1);
    console.log(reserva.detalhesreserva);
  }

  fazerReserva(): void {
    console.log(this.cliente.nome, this.tipoCliente, this.tipoQuarto, this.quantidadeDias);
  }

}
