<script setup lang="ts">

import { ref } from 'vue';
/* import Button from '../ui/button/Button.vue'; */

const { options } = defineProps<{ options: any}>()

import { PlusCircleIcon } from '@heroicons/vue/16/solid';
import { MinusCircleIcon } from '@heroicons/vue/16/solid';

const isListOpen = ref(false)


</script>

<template>
    <div class="bg-dark-blue w-fit p-8 rounded-lg shadow-lg">
        <div class="bg-medium-green p-2 px-4 rounded">
            <p @click="() => isListOpen = !isListOpen" class="text-[#c6f5ca] text-center">Añadir enemigos</p>
        </div>
       <div>
         <div
            :class="['flex flex-col items-start space-y-2 transition-all duration-300 overflow-hidden', { 'max-h-0': !isListOpen, 'max-h-96 pt-4': isListOpen }]">
            <div v-for="option in options" :key="option.value" class="w-full">

                <div
                    class=" text-gray-200 flex items-center justify-between space-x-4 p-2 px-4 bg-grayblue-dark rounded-lg">
                    <p>{{option.label}}</p>
                    <div class="flex space-x-4 items-center">
                        <MinusCircleIcon @click="option.count--" class="w-[22px] cursor-pointer" />
                        <p>{{ option.count }}</p>
                        <PlusCircleIcon @click="option.count++" class="w-[22px] cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>

 
</template>