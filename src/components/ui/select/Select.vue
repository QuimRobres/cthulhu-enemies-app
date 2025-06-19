<script setup lang="ts">
interface IOptions {
    value: string,
    label: string
}
const { onChange, options } = defineProps<{ onChange: (value: string) => void, text: string, options: IOptions[] }>()

const handleChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    const value = target.value;
    // Call the onChange prop with the selected value
    onChange(value);
}
</script>

<template>
    <select @change="handleChange($event)">
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>

    <!--  <p v-for="enemy in enemiesArr" :key="enemy.id">{{ enemy.name }} - {{ enemy.health }} HP</p> -->
</template>
