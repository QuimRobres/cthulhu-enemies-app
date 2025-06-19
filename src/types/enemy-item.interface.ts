import type { IWeapon } from "./weapon.interface";

export interface IEnemyItem {
  id: string;
  name: string;
  health: number;
  type: string;
  stats: IEnemyStatus[];
  damageModifier: string;
  corpulence: string;
  items: IWeapon[];
}

export interface IEnemyStatus {
  name: string;
  value: number;
}
