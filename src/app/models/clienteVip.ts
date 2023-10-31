import { ClienteAbstract } from "./cliente";

export class ClienteVip extends ClienteAbstract {
  constructor(name: string, type: string) {
    super(name, type);
  }

  override mensagem(): string {
    return 'Obrigado por ser nosso cliente VIP.';
  }
}