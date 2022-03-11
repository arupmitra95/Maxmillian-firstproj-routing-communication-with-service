export class Ingredient {
  public name: string = "";
  public amount: number = 0;

  constructor(name:string, amt:number){
    this.name = name;
    this.amount = amt;
  }
}