export interface IEnemyOption {
  value: string;
  label: string;
  count: number;
  statsConfig: IStatConfig[]
  extraField?: any; //test kimo canviar
}

export interface IStatConfig {
  id: string,
  name: string,
  numberOfDices: number,
  diceType: number,
  modifier: number,
  operation: "+" | "-" | "*",
  extraModifier?: number,
  extraOperation?: "+" | "-" | "*"
}