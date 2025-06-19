<script setup lang="ts">
import { ref } from 'vue';
import { XCircleIcon } from '@heroicons/vue/16/solid';
import WeaponTable from '../../weapon-table/WeaponTable.vue';

const { enemy } = defineProps<{ enemy: any }>()

const isItemsPanelOpen = ref(false);

const toggleItemsPanel = () => {
    isItemsPanelOpen.value = !isItemsPanelOpen.value;
};

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

const handleResetWeapons = () => {
    enemy.items = [];
}
</script>

<template>
    <div class="bg-gray-200  w-fit">
        <div class="flex">
            <div class="border border-gray-400">
                <table>
                    <thead>
                        <tr>
                            <td class="py-2 px-4 odd:bg-gray-100" v-for="stat in enemy.stats" :key="stat.name">{{
                                stat.name }}
                                <div class="flex justify-center">
                                    <div class="border-t w-full border-gray-400 mt-2 "></div>
                                </div>
                            </td>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 odd:bg-gray-100" v-for="stat in enemy.stats" :key="stat.name">{{
                                stat.value }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex">
                    <table>
                        <thead>
                            <tr>
                                <td class="py-2 px-4 odd:bg-gray-100">Modificador al daño
                                    <div class="flex justify-center">
                                        <div class="border-t w-full border-gray-400 mt-2 "></div>
                                    </div>
                                </td>
                                <td class="py-2 px-4 odd:bg-gray-100">Corpulencia
                                    <div class="flex justify-center">
                                        <div class="border-t w-full border-gray-400 mt-2 "></div>
                                    </div>
                                </td>
                                <!--  <td class="py-2 px-4 border" v-for="stat in enemy.stats" :key="stat.name">{{ stat.name }}
                    </td> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 odd:bg-gray-100">{{ enemy.damageModifier }}</td>
                                <td class="py-2 px-4 odd:bg-gray-100">{{ enemy.corpulence }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="flex items-center space-x-2 py-2 px-4 bg-white">
                        <p @click="enemy.health--"
                            class="bg-black text-white w-[24px] h-[24px]  text-xl font-bold flex items-center justify-center rounded-full cursor-pointer">
                            -</p>

                        <p class="text-lg">{{ enemy.health }}</p>
                        <p @click="enemy.health++"
                            class="bg-black text-white w-[24px] h-[24px] text-xl font-bold flex items-center justify-center rounded-full cursor-pointer">
                            +</p>

                    </div>
                    <div class="h-full p-2">
                        <div class="p-2 bg-gray-300 relative">
                            <p v-if="!isItemsPanelOpen" @click="toggleItemsPanel">Añadir arma</p>
                            <div v-else class="absolute bg-red-300 top-0 left-0 w-[200px] ">
                                <div class="relative p-2">
                                    <p class="text-left">Armas: </p>
                                    <XCircleIcon @click="toggleItemsPanel" class="w-[24px] absolute top-2 right-2" />
                              
                                    <div class="pt-4 flex flex-col space-y-2">
                                        <div v-for="weapon in weaponsV2">
                                            <p @click="enemy.items.push(weapon)" class="p-2 bg-teal-100">{{
                                                weapon.name }}
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
        <div class="w-fit border border-gray-400 mt-4">
            <div v-for="item in enemy?.items">
                <WeaponTable :weapon="item" />
            </div>
        </div>
    </div>
</template>