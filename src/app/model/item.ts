import { Produto } from "./product";

export class Item {
  public codigo: number = 0;
  public quantidade: number = 0;
  public produto: Produto = new Produto();
}
