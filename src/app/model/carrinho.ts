import {Item} from "./item";
import {Cliente} from "./cliente";

export class Carrinho {
  public codigo: number = 0;
  public cliente: Cliente = new Cliente();
  public itens: Item[] = [];
}
