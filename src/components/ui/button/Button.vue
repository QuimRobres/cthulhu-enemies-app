<script setup lang="ts">
defineProps<{ onClick: () => void, text: string, type?: string }>()

</script>

<template>
    <button @click="onClick" class="bg-deep-ocean-500 border border-deep-ocean-300 text-white py-2 px-4 rounded text-bold">{{ text
        }}</button>

    <!--  <p v-for="enemy in enemiesArr" :key="enemy.id">{{ enemy.name }} - {{ enemy.health }} HP</p> -->
</template>
<!-- 
colors: {
    "darkBlue": "#0B1E26", // Azul oscuro
  cthulhu: {
    bg: '#0B1E26',         
    panel: '#1D2B2A',     
    text: '#D9D4C5',      
    primary: '#4C6654',    
    secondary: '#7A5E80',  
    border: '#434343',    
    danger: '#872F2F',     
    hover: '#6C8872',     
    popup: '#1A2631',     
  },
}, -->