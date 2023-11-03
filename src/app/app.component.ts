import { Component } from '@angular/core';
import { ClienteNormal } from './models/clienteNormal';
import { QuartoSimples } from './models/quartoSimples';
import { Reserva } from './models/reserva';
import { Quarto } from './interfaces/quarto.interface';
import { HotelService } from './services/hotel.service';
import { ClienteVip } from './models/clienteVip';
import { QuartoLuxo } from './models/quartoLuxo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-treinamento';
  cliente = {nome: ''};
  tipoCliente = 'normal';
  quarto!: Quarto;
  tipoQuarto = '';
  quantidadeDias!: number;

  constructor(public hotelService: HotelService) {}

  criarCliente(): void {
    if (this.tipoCliente === 'normal') {
      this.cliente = new ClienteNormal(this.cliente.nome, 'Normal');
      this.tipoQuarto = 'simples';
    } else if (this.tipoCliente === 'vip') {
      this.cliente = new ClienteVip(this.cliente.nome, 'VIP');
      this.tipoQuarto = 'deluxo';
    }

    this.hotelService.setCliente(this.cliente);
    this.escolherQuarto();
  }

  ngOnInit() {
    let cliente = new ClienteNormal('Elias', 'Normal');
    let quarto  = new QuartoSimples();
    let reserva = new Reserva(cliente, quarto, 1);
    console.log(reserva.detalhesreserva);
  }

  escolherQuarto(): void {
    if (this.tipoQuarto == 'simples') {
      this.quarto = new QuartoSimples();
    } else if (this.tipoQuarto === 'deluxo') {
      this.quarto = new QuartoLuxo();
    }
    
    this.hotelService.setQuarto(this.quarto);
  }

  fazerReserva(): void {
    this.criarCliente();

    let cliente = this.hotelService.getCliente();
    let quarto = this.hotelService.getQuarto();
    let reserva = new Reserva(cliente, quarto, this.quantidadeDias);

    this.hotelService.addReserva(reserva);

    console.log(this.hotelService.getReservas());
  }
}
