<script setup lang="ts">
import type { IEnemyOption } from '../../types';
import { Icon } from '@iconify/vue'
import { ref } from 'vue';
/* import Button from '../ui/button/Button.vue'; */

const { options } = defineProps<{ options: IEnemyOption[] }>()

const isListOpen = ref(false)

</script>

<template>
    <div>
        <div class=" bg-emerald-900 rounded p-4 text-lg ">
            <p @click="() => isListOpen = !isListOpen" class="bg-teal-200 text-black rounded-lg">Select enemies</p>
            <div
                :class="['flex flex-col items-start space-y-4 text-lg transition-all duration-300 overflow-hidden', { 'max-h-0': !isListOpen, 'max-h-96': isListOpen }]">
                <div class="border-t border-teal-600 mt-4 w-full"></div>
                <div class="w-full flex space-x-4" v-for="option in options" :key="option.value">
                    <div class="flex items-center justify-between w-full  bg-teal-600 rounded-full px-4 py-2">
                        <p>{{ option.label }}</p>
                        <div class="flex items-center space-x-2">
                            <div @click="option.count !== undefined && option.count > 0 && option.count--">
                                <Icon icon="streamline-ultimate:subtract-circle-bold" />
                            </div>

                            <p>{{ option.count ?? 0 }}</p>
                            <div>
                                <Icon @click="option.count !== undefined && option.count++"
                                    icon="streamline-ultimate:add-circle-bold-bold" />
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
</template>