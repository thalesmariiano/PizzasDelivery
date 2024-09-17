<script setup>
    import { pizzas } from '@/assets/data/db.json'
    import PizzaCard from './PizzaCard.vue';
</script>

<template>
    <section class="w-full space-y-4 px-2 sm:px-5">
        <h1 class="text-2xl font-bold">Pizzas</h1>

        <PizzaCard 
            v-for="pizza in pizzas"
            :key="pizza.id"
            :pizza="pizza"
            @click="$emit('getPizza', pizza)"
        />

        <div class="w-full flex justify-center">
            <button class="text-white bg-red-500 px-10 py-1 rounded text-lg">Ver mais</button>
        </div>

    </section>
  
</template>