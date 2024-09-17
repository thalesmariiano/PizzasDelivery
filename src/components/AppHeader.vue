<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
     <header class="p-5">
        <h1 class="text-center font-bold text-3xl text-red-500">
            <RouterLink
                to="/"
            >
                Pizzas
                Delivery
            </RouterLink>
            
        </h1>
    </header>
</template>