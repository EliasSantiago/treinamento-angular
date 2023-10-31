import { Cliente } from "../interfaces/cliente.interface";

export abstract class ClienteAbstract implements Cliente {
  constructor(public name: string, public type: string) {}

  mensagem(): string {
    return '';
  }
}