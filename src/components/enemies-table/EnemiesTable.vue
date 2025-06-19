<script setup lang="ts">
import EnemyTableItem from './enemy-table-item/EnemyTableItem.vue';

const { enemies } = defineProps<{ enemies: any[] }>()

</script>

<template>
    <div class="text-black flex flex-col space-y-4">
        <div class="bg-gray-200 flex w-fit" v-for="enemy in enemies">
            <EnemyTableItem :enemy="enemy" />
        </div>
    </div>
</template>
