<script setup lang="ts">
import { ref } from 'vue';

/* import { PlusCircleIcon } from '@heroicons/vue/16/solid'; */
import { PlusIcon } from '@heroicons/vue/16/solid';
import { XCircleIcon } from '@heroicons/vue/16/solid';


const { enemy, weaponsV2 } = defineProps<{ enemy: any, weaponsV2: any }>()

const isItemsPanelOpen = ref(false);

const toggleItemsPanel = () => {
    isItemsPanelOpen.value = !isItemsPanelOpen.value;
}
const handleAddWeapon = (item: any) => {
    enemy.extraField.selectedOptions.push(item);
}


const handleDeleteWeapon = (index: number) => {
    enemy.extraField.selectedOptions.splice(index, 1);
}
</script>
<template>
    <div class="relative">
        <div @click="toggleItemsPanel"
            :class="['bg-eldritch-purple-300 cursor-pointer w-fit px-4 py-2 rounded-lg  text-gray-200 flex space-x-2']">
            <PlusIcon class="w-[22px]" />
            <p>{{ enemy.extraField.label }}</p>
        </div>
        <div
            :class="['bg-eldritch-purple-700 w-[250px] h-[200px] overflow-y-scroll top-0 absolute left-28 rounded-lg z-100 overflow-hidden flex flex-col space-y-2 ', { 'max-h-0': !isItemsPanelOpen, 'max-h-fit p-4 pb-6 pt-12': isItemsPanelOpen }]">
            <XCircleIcon @click="toggleItemsPanel"
                class="w-[22px] cursor-pointer absolute top-2 right-4 text-light-gray"" />
    <div @click="() => handleAddWeapon(weapon)" class="text-gray-200 w-full flex justify-between bg-eldritch-purple-300
                p-2
                rounded-lg" v-for="weapon in weaponsV2">
                <p>{{ weapon.name }}
                </p>
        </div>
    </div>
    <div v-for="(weapon, index) in enemy.extraField.selectedOptions"
        class=" relative bg-eldritch-purple-500 text-gray-200 p-2 mt-2 px-4 flex flex-col space-y-1 items-center justify-center">
        <p class="text-center">{{ weapon.name }}</p>
        <div class="absolute right-2 top-2 ">
            <XCircleIcon @click="() => handleDeleteWeapon(index)" class="w-[18px] text-light-gray" />
        </div>
        <div class="border-t border-wite w-[75%] pb-2" />
        <div v-for="stat in weapon.stats" class="flex justify-between w-full">
            <p class="text-light-gray">{{ stat.name }}</p>
            <p>{{ stat.value }}</p>
        </div>
    </div>
    </div>
</template>
