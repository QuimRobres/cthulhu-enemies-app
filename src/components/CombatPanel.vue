<script setup lang="ts">

import Button from './ui/button/Button.vue'
/* import Select from './ui/select/Select.vue'; */
import EnemySelectionPanel from './enemy-selection-panel/EnemySelectionPanel.vue';
import { ref } from 'vue';
import { generateEnemies } from '../utils/generate-enemies-utils';
import EnemiesTable from './enemies-table/EnemiesTable.vue';

// Explicitly type the options as IEnemyOption[] to ensure correct typing for 'operation'
import type { IEnemyOption } from '../types';
const monstriOptions = ref<IEnemyOption[]>([
    {
        value: 'human', label: 'Humano', count: 0, extraField: {
            id: "weapon",
            label: "Armas",
            selectedOptions: [],
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
            { id: 'appearence', name: "Apariencia", numberOfDices: 3, diceType: 6, modifier: 5, operation: "*" as "*" },
            { id: "education", name: "Educación", numberOfDices: 3, diceType: 6, modifier: 5, operation: "+" as "+", extraModifier: 5, extraOperation: "*" as "*" }
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
            { id: 'appearence', name: "Apariencia", numberOfDices: 3, diceType: 6, modifier: 5, operation: "*" as "*" },
            { id: "education", name: "Educación", numberOfDices: 3, diceType: 6, modifier: 5, operation: "+" as "+" }
        ]
    },

])

let enemiesArr: any = ref([])





const handleGenerateEnemies = () => {
    const enemies = generateEnemies(monstriOptions.value);
    console.log('test kimo monstriOptions', enemies);
    const updatedEnemies = [...enemiesArr.value, ...enemies];
    enemiesArr.value = updatedEnemies
}

const handleResetEnemies = () => {
    enemiesArr.value = [];
}

</script>

<template>
    <div class="text-sm">
        <div class="flex space-x-4 items-start">
            <EnemySelectionPanel :options="monstriOptions" />
            <div class="flex items-center space-x-4 pt-2">
                <Button :onClick="handleGenerateEnemies" text="Generate Enemies" />
                <Button :onClick="handleResetEnemies" text="Clean enemies" />
            </div>
        </div>
        <div >
            <EnemiesTable :enemies="enemiesArr" />
        </div>
    </div>
</template>
