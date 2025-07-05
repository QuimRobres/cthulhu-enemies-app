<script setup lang="ts">
import EnemyTableItem from './enemy-table-item/EnemyTableItem.vue';

const { enemies, removeEnemy, colorOptions, handleAddColorIdentifier } = defineProps<{ enemies: any[], removeEnemy: (index: number) => void, colorOptions: any, handleAddColorIdentifier: (index: number, value: string) => void; }>()


</script>

<template>
    <div class="text-black flex flex-wrap space-x-4 space-y-4">
        <div class="" v-for="(enemy, index) in enemies">
            <EnemyTableItem :enemy="enemy" :index="index" :removeEnemy="removeEnemy" :colorOptions="colorOptions" :handleAddColorIdentifier="handleAddColorIdentifier"/>
        </div>
    </div>
</template>
