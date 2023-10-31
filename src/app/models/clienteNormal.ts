import { ClienteAbstract } from "./cliente";

export class ClienteNormal extends ClienteAbstract {
  constructor(name: string, type: string) {
    super(name, type);
  }
}