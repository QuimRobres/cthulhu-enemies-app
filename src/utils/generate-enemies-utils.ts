import type { IEnemyOption } from "../types";
import type { IEnemyItem } from "../types/enemy-item.interface";

const generateStat = (
  diceType: number,
  numberOfDices: number,
  modifier: number,
  operation: "+" | "-" | "*",
  extraModifier?: number,
  extraOperation?: "+" | "-" | "*"
) => {
  let total = 0;
  for (let i = 0; i < numberOfDices; i++) {
    total += Math.floor(Math.random() * diceType) + 1;
  }

  // fuerza + constitucion + destreza + apariencia + poder 3d6 * 5
  // tamaño + inteligencia + educacion +  2d6 + 6

  if (operation === "*") {
    total *= modifier;
  } else {
    total += modifier;
  }
  if (extraModifier && extraOperation) {
    if (extraOperation === "*") {
      total *= extraModifier;
    } else {
      total += extraModifier;
    }
  }
  return total;
};

export const getDamageModifier = (value: number) => {
  const modifierRanges = [
    { min: 2, max: 64, damageValue: "-2", corpulenceValue: "-2" },
    { min: 65, max: 84, damageValue: "-1", corpulenceValue: "-1" },
    { min: 85, max: 124, damageValue: "-", corpulenceValue: "0" },
    { min: 125, max: 164, damageValue: "+1D4", corpulenceValue: "1" },
    { min: 165, max: 204, damageValue: "+1D6", corpulenceValue: "2" },
    { min: 205, max: 284, damageValue: "+2D6", corpulenceValue: "3" },
    { min: 285, max: 364, damageValue: "+3D6", corpulenceValue: "4" },
    { min: 365, max: 444, damageValue: "+4D6", corpulenceValue: "5" },
    {
      min: 445,
      max: 524,
      damageValue: "+5D6 (+1D6 cada 80p)",
      corpulenceValue: "6* (+1 cada 80p)",
    },
  ];

  const range = modifierRanges.find(
    (modifierRange) => value >= modifierRange.min && value <= modifierRange.max
  );
  return range;
};
export const generateEnemies = (selectedEnemies: IEnemyOption[]) => {
  const enemiesTableStats: any[] = [];

  selectedEnemies.forEach((enemy) => {
    if (enemy.count > 0) {
      for (let i = 0; i < enemy.count; i++) {
        let strength = 0;
        let size = 0;
        let enemyItem: IEnemyItem = {
          id: `${enemy.value}-${i + 1}`,
          name: `${enemy.label}-${i + 1}`,
          type: enemy.value,
          health: generateStat(6, 3, 5, "*"),
          damageModifier: "",
          corpulence: "",
          items:[],
          stats: enemy.statsConfig.map((statConfig) => {
            const statItem = {
              name: statConfig.name,
              value: generateStat(
                statConfig.diceType,
                statConfig.numberOfDices,
                statConfig.modifier,
                statConfig.operation,
                statConfig.extraModifier,
                statConfig.extraOperation
              ),
            };

            if (statConfig.id === "strength") {
              strength = statItem.value;
            }
            if (statConfig.id === "size") {
              size = statItem.value;
            }

            return statItem;
          }),
        };
        const modifiers = getDamageModifier(strength + size);
        enemyItem = {
          ...enemyItem,
          damageModifier: modifiers?.damageValue || "-",
          corpulence: modifiers?.corpulenceValue || "0",
        };
        enemiesTableStats.push(enemyItem);
      }
    }
  });
  return enemiesTableStats;
};
