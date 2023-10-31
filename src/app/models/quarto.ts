import { Quarto } from "../interfaces/quarto.interface";

export abstract class QuartoAbstract implements Quarto {
  constructor(public type: string, public value: number) {}
}