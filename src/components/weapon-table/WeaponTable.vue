<script setup lang="ts">
import type { IWeapon } from '../../types';



const { weapon } = defineProps<{ weapon: IWeapon }>()

</script>

<template>
    <div class="text-black flex flex-col space-y-4">

        <table>
            <thead>
                <tr>
                    <td class="py-2 px-4 odd:bg-gray-100" >{{ weapon.name }}
                        <div class="flex justify-center">
                            <div class="border-t w-full border-gray-400 mt-2 "></div>
                        </div>
                    </td>
                    <td class="py-2 px-4 odd:bg-gray-100" v-for="stat in weapon.stats" :key="stat.name">{{ stat.name }}
                        <div class="flex justify-center">
                            <div class="border-t w-full border-gray-400 mt-2 "></div>
                        </div>
                    </td>

                </tr>

            </thead>

            <tbody>
                <tr>
                    <td class="py-2 px-4 odd:bg-gray-100" >
                       
                    </td>
                    <td class="py-2 px-4 odd:bg-gray-100" v-for="stat in weapon.stats" :key="stat.name">{{ stat.value }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
