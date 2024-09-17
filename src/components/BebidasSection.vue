<script setup>
    import BebidaCard from './BebidaCard.vue';
</script>

<template>
    <section class="w-full space-y-4 mt-5 px-2 sm:px-5">
        <h1 class="text-2xl font-bold text-center">Bebidas</h1>

        <div class="w-full flex justify-center items-center">
             <div class="grid gap-4 grid-cols-1 xs:grid-cols-2">
                <BebidaCard @click="$emit('clicked')" />
                <BebidaCard @click="$emit('clicked')" />
                <BebidaCard @click="$emit('clicked')" />
                <BebidaCard @click="$emit('clicked')" />
                <BebidaCard @click="$emit('clicked')" />
                <BebidaCard @click="$emit('clicked')" />
            </div>
        </div>
       
    </section>
</template>