export interface IWeapon {
  id: string;
  name: string;
  
  stats: IWeaponStat[];
}

export interface IWeaponStat {
  name: string;
  value: number;
}
