<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router'

    const props = defineProps(['pizza'])
    const pizza = computed(() =>  props.pizza)
</script>

<template>
    <div class="w-full h-full overflow-hidden relative sm:rounded-md">
        <div class="w-full min-h-72 h-72 bg-center bg-cover" :style="{backgroundImage: 'url(./pizzas-banner/'+pizza.image+')'}"></div>

        <div class="w-full h-[30rem] rounded-t-3xl flex flex-col justify-between bg-white px-2 pb-2 pt-4 absolute bottom-0">
            <div class="w-full h-full flex flex-col">
                <div>
                    <h1 class="text-2xl font-semibold">{{ pizza.name }}</h1>
                    <p class="leading-5 text-neutral-600">{{ pizza.description }}</p>
                    <p class="font-bold text-2xl mt-2">R$ {{ pizza.price + ',00' }}</p>
                </div>
                <div class="w-full h-full bg-neutral-200/50 rounded-md my-3">

                </div>
            </div>
            <div class="w-full flex justify-end items-center">
                <RouterLink
                    :to="{path: '/make-pizza', query: {id: pizza.id}}"
                    class="text-white font-semibold bg-red-500 px-10 py-2 rounded hover:bg-red-600 transition-all">
                    Montar Pizza
                </RouterLink>
            </div>
        </div>

        <button @click="$emit('close')" class="absolute right-0 top-0 w-10 h-10 flex justify-center items-center rounded-bl-3xl bg-white hover:bg-neutral-300 transition-all">
            <img class="w-10" src="@/assets/icons/x.svg">
        </button>    
    </div>
</template>

<style scoped>
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
        margin: 0;
    }
</style>