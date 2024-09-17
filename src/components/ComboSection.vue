<script setup>
    import ComboCard from './ComboCard.vue'
</script>

<template>
    <section class="w-full space-y-4 mt-5 px-2 sm:px-5">
        <h1 class="text-2xl font-bold">Destaques</h1>

        <div class="combo-scroll flex gap-4 overflow-x-auto">
            <ComboCard @click="$emit('clicked')" />
            <ComboCard @click="$emit('clicked')" />
            <ComboCard @click="$emit('clicked')" />
            <ComboCard @click="$emit('clicked')" />
            <ComboCard @click="$emit('clicked')" />
            <ComboCard @click="$emit('clicked')" />
        </div>
    </section>
</template>