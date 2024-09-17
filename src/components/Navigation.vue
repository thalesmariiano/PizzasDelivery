<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="w-full flex justify-center fixed left-0 bottom-0">
        <nav class="w-full max-w-lg flex justify-between px-5 py-2 bg-white shadow-navigation rounded-t-3xl">
            <RouterLink
                to="/menu"
                class="flex flex-col items-center"
            >
                <img class="w-6" src="@/assets/icons/shop.svg">
                Início
            </RouterLink>
            <RouterLink
                to="/menu"
                class="flex flex-col items-center"
            >
                <img class="w-6" src="@/assets/icons/search-black.svg">
                Buscar
            </RouterLink>
            <RouterLink
                to="/menu"
                class="flex flex-col items-center"
            >
                <img class="w-6" src="@/assets/icons/person.svg">
                Perfil
            </RouterLink>
        </nav>
    </div>
</template>