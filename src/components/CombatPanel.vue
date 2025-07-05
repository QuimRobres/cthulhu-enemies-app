<script setup lang="ts">

import Button from './ui/button/Button.vue'
/* import Select from './ui/select/Select.vue'; */
import EnemySelectionPanel from './enemy-selection-panel/EnemySelectionPanel.vue';
import { ref } from 'vue';
import { generateEnemies } from '../utils/generate-enemies-utils';
import EnemiesTable from './enemies-table/EnemiesTable.vue';

// Explicitly type the options as IEnemyOption[] to ensure correct typing for 'operation'
/* import type { IEnemyOption } from '../types'; */
const monstriOptions = ref<any>([
    {
        value: 'human', label: 'Humano', count: 0, extraField: {
            id: "weapon",
            label: "Armas",

            /*    options: [
                   { value: 'knife', label: 'Cuchillo', damage: "1D4 + BD", type: "corta" },
                   { value: 'gun', label: 'Pistola', damage: "1d6", type: "fuego" },
                   { value: 'sword', label: 'Espada', damage: "1d4 + 3 + BD", type: "corta" }
               ] */
        }, statsConfig: [
            { id: 'strength', name: "Fuerza", numberOfDices: 3, diceType: 6, modifier: 5, operation: "*" as "*" },
            { id: 'constitution', name: "Constitución", numberOfDices: 3, diceType: 6, modifier: 5, operation: "*" as "*" },
            { id: 'size', name: "Tamaño", numberOfDices: 2, diceType: 6, modifier: 6, operation: "+" as "+", extraModifier: 5, extraOperation: "*" as "*" },
            { id: 'dexterity', name: "Destreza", numberOfDices: 3, diceType: 6, modifier: 5, operation: "*" as "*" },
            { id: 'inteligence', name: "Inteligencia", numberOfDices: 3, diceType: 6, modifier: 5, operation: "+" as "+", extraModifier: 5, extraOperation: "*" as "*" },
            { id: 'power', name: "Poder", numberOfDices: 3, diceType: 6, modifier: 5, operation: "*" as "*" },
        ]
    },
    {
        value: 'profundo', label: 'Profundo', count: 0, statsConfig: [
            { id: 'strength', name: "Fuerza", numberOfDices: 4, diceType: 6, modifier: 5, operation: "*" as "*" },
            { id: 'constitution', name: "Constitución", numberOfDices: 3, diceType: 6, modifier: 5, operation: "*" as "*" },
            { id: 'size', name: "Tamaño", numberOfDices: 3, diceType: 6, modifier: 6, operation: "+" as "+", extraModifier: 5, extraOperation: "*" as "*" },
            { id: 'dexterity', name: "Destreza", numberOfDices: 3, diceType: 6, modifier: 5, operation: "*" as "*" },
            { id: 'inteligence', name: "Inteligencia", numberOfDices: 2, diceType: 6, modifier: 6, operation: "+" as "+", extraModifier: 5, extraOperation: "*" as "*" },
            { id: 'power', name: "Poder", numberOfDices: 3, diceType: 6, modifier: 5, operation: "*" as "*" },
        ]
    },

])

const colorOptions = ref<any>([
    { value: 'red', label: "#fc0303", isSelected: false },
    { value: 'light-green', label: "#3dfc03", isSelected: false },
    { value: 'light-blue', label: '#03a5fc', isSelected: false },
    { value: 'yellow', label: '#fcec03', isSelected: false },
    { value: 'purple', label: '#A020F0', isSelected: false },
    { value: 'grey', label: '#9c9c9c', isSelected: false },
])

let enemiesArr: any = ref([])





const handleGenerateEnemies = () => {
    const enemies = generateEnemies(monstriOptions.value);
    const updatedEnemies = [...enemiesArr.value, ...enemies];
    enemiesArr.value = updatedEnemies
    

}

const handleResetEnemies = () => {
    enemiesArr.value = [];
}

const handleRemoveEnemy = (index: number) => {
    enemiesArr.value.splice(index, 1);
}

const handleAddColorIdentifier = (index: number, value: string) => {
    enemiesArr.value[index].colorIdentifier = enemiesArr.value[index].colorIdentifier = value;
    /*    const colorOption = colorOptions.value.find((option: any) => option.value === value);
       if (colorOption) {
           colorOption.isSelected = !colorOption.isSelected;
       } */

}
</script>

<template>
    <div class="">
        <div class="flex space-x-4 items-start">
            <EnemySelectionPanel :options="monstriOptions" />
            <div class="flex items-center space-x-4 pt-2">
                <Button :onClick="handleGenerateEnemies" text="Generate Enemies" />
                <Button :onClick="handleResetEnemies" text="Clean enemies" />
            </div>
        </div>
        <div class="pt-4">
            <EnemiesTable :enemies="enemiesArr" :removeEnemy="handleRemoveEnemy" :colorOptions="colorOptions"
                :handleAddColorIdentifier="handleAddColorIdentifier" />
        </div>
    </div>
</template>
