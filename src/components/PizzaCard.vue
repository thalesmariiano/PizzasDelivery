<script setup>
    const { pizza } = defineProps(['pizza'])
</script>

<template>
    <div class="w-full h-36 flex gap-2 rounded-lg border border-neutral-200 hover:border-red-500 transition-all cursor-pointer">

        <div class="w-full min-w-36 max-w-36 rounded-l-lg bg-center bg-cover" :style="{backgroundImage: 'url(./pizzas-banner/'+pizza.image+')' }">
            <!-- <img class="w-full h-full rounded-l-lg" :src="pizza.image"> -->
        </div>

        <div class="w-full h-full flex flex-col justify-between py-1">
            <div>
                <h1 class="text-lg font-semibold">{{ pizza.name }}</h1>
                <p class="leading-4 text-xs">{{ pizza.description }}</p>
            </div>
            <div>
                <p class="text-green-700 font-semibold">R$ {{ pizza.price + ',00' }}</p>
            </div>
        </div>

    </div>
</template>