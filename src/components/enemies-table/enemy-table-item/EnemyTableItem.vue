<script setup lang="ts">
import { HeartIcon, XCircleIcon } from '@heroicons/vue/16/solid';
import { PlusCircleIcon } from '@heroicons/vue/16/solid';
import { MinusCircleIcon } from '@heroicons/vue/16/solid';

import WeaponTableItem from '../weapon-table-item/WeaponTableItem.vue';

import { ref } from 'vue';

const { enemy, removeEnemy, index, colorOptions, handleAddColorIdentifier } = defineProps<{ enemy: any, removeEnemy: (index: number) => void, index: number, colorOptions: any, handleAddColorIdentifier: (index: number, value: string) => void; }>()

const weaponsV2 = [{
    id: 'knife', name: 'Cuchillo pequeño', stats: [
        {
            name: "Habilidad"
            , value: "Combatir (Pelea)"
        },
        {
            name: "Daño"
            , value: "1D4 + BD"
        }, {
            name: "Alcance",
            value: "Toque"
        },
        { name: "Usos", value: "1" },
        { name: "Carg", value: "-" }
    ]
}, {
    id: 'bludgeon', name: 'Cachiporra (bastón o similar)', stats: [
        {
            name: "Habilidad"
            , value: "Combatir (Pelea)"
        },
        {
            name: "Daño"
            , value: "1D8 + BD"
        }, {
            name: "Alcance",
            value: "Toque"
        },
        { name: "Usos", value: "1" },
        { name: "Carg", value: "-" }
    ]
}, {
    id: 'knuckles', name: 'Nudillera', stats: [
        {
            name: "Habilidad"
            , value: "Combatir (Hacha)"
        },
        {
            name: "Daño"
            , value: "1D3 + BD"
        }, {
            name: "Alcance",
            value: "Toque"
        },
        { name: "Usos", value: "1" },
        { name: "Carg", value: "-" }
    ]
},
{
    id: 'revolver', name: 'Revolver .32', stats: [
        {
            name: "Habilidad"
            , value: "Arma fuego corta"
        },
        {
            name: "Daño"
            , value: "1D8"
        }, {
            name: "Alcance",
            value: "15m"
        },
        { name: "Usos", value: "1 (3)" },
        { name: "Carg", value: 6 }
    ]
},
{
    id: 'axe', name: 'Hacha de leñador', stats: [
        {
            name: "Habilidad"
            , value: "Combatir (Hacha)"
        },
        {
            name: "Daño"
            , value: "1D8 + 2 + BD"
        }, {
            name: "Alcance",
            value: "Toque"
        },
        { name: "Usos", value: "1" },
        { name: "Carg", value: "-" }
    ]
}]

const isColorSelectionOpen = ref(false)
const handleColorClick = (value: string) => {
    isColorSelectionOpen.value = !isColorSelectionOpen.value;
    handleAddColorIdentifier(index, value);
}
</script>
<template>
    <div class="bg-dark-blue p-8 rounded-lg shadow-lg w-[280px]">
        <div class="flex items-center justify-between relative">
            <div class="flex items-center space-x-4 ">
                <p class="text-gray-200 text-2xl">{{ enemy.name }}</p>
                <div class="border-2 border-white h-[18px] w-[18px] rounded-full"
                    :style="{ backgroundColor: enemy.colorIdentifier ? enemy.colorIdentifier : 'transparent' }"
                    :onClick="() => isColorSelectionOpen = !isColorSelectionOpen" />

                <div v-if="isColorSelectionOpen"
                    class="flex w-[64px] flex-wrap absolute top-1 right-5 transform -translate-x-1/2   bg-gray-500 items-center justify-between p-2 rounded-lg shadow-lg">
                    <div v-for="color in colorOptions" class="border-1 h-[18px] w-[18px] rounded-full my-1 "
                        :onclick="() => handleColorClick(color.label)"
                        :style="{ backgroundColor: color.isSelected ? 'black' : color.label }">
                    </div>
                </div>
            </div>
            <XCircleIcon @click="() => removeEnemy(index)" class="w-[18px] text-light-gray" />
        </div>
        <div class="flex flex-col space-y-1 mt-4">
            <div v-for="(stat, index) in enemy.stats" :key="stat.id"
                :class="[' text-gray-200 flex items-center justify-between space-x-2 p-2 px-4 bg-grayblue-dark ', { 'rounded-t-lg': index === 0, /* 'rounded-b-lg': index + 1 === enemy.stats.length */ }]">
                <p class="text-light-gray">{{ stat.name }}</p>
                <p>{{ stat.value }}</p>
            </div>
            <div
                class="relative text-gray-200 p-2 px-4 flex items-center justify-between space-x-2 bg-grayblue-dark rounded-b-lg">
                <MinusCircleIcon @click="enemy.health--" class="w-[22px] cursor-pointer" />
                <HeartIcon class="text-light-red w-[46px]" />
                <p class="absolute left-1/2 transform -translate-x-1/2 font-semibold text-gray-200">
                    {{ enemy.health }}</p>
                <PlusCircleIcon @click="enemy.health++" class="w-[22px] cursor-pointer" />
            </div>
        </div>
        <div v-if="enemy.extraField.label" class="mt-4">
            <WeaponTableItem :enemy="enemy" :weaponsV2="weaponsV2" />
        </div>
    </div>
</template>