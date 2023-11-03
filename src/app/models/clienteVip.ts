import { ClienteAbstract } from "./cliente";

export class ClienteVip extends ClienteAbstract {
  constructor(nome: string, tipo: string) {
    super(nome, tipo);
  }

  override mensagem(): string {
    return 'Obrigado por ser nosso cliente VIP.';
  }
}