<script setup>
    import { ref, onMounted } from 'vue'
    import AppHeader from './AppHeader.vue';

    const props = defineProps(['productsAmount'])
    const openBag = ref(false)

</script>

<template>
    <div :class="openBag ? 'containerViewForm' : 'containerNavForm'">
        <div :class="openBag ? 'viewForm' : 'navForm'">
            <button @click="openBag = true" v-show="!openBag" class="w-full h-full flex justify-between items-start p-5 bg-transparent font-semibold text-white">
                <div class="relative">
                    <span class="absolute -top-2 -left-1 text-white bg-red-700 px-1 py-0.5 rounded text-xs">{{ props.productsAmount }}</span>
                    <img class="w-6" src="@/assets/icons/handbag.svg">
                </div>
                Ver Sacola
                <span>R$ 25,00</span>
            </button>

            <Transition
                enter-active-class="animate__animated animate__fadeIn"
        		leave-active-class="animate__animated animate__fadeOut"
            >
                <div class="w-full" v-show="openBag">
                    <AppHeader />

                    <hr>

                    <div class="w-full mt-5">
                        <h1 class="text-2xl font-semibold">Sua Sacola</h1>
                    </div>

                 </div>
            </transition>
           


        </div>
           
    </div>
</template>

<style scoped>
    .containerNavForm {
        @apply w-full flex justify-center fixed left-0 bottom-10 transition-all
    }
    .containerViewForm {
        @apply w-full h-full flex justify-center items-end fixed top-0 left-0 transition-all
    }
    .navForm {
        @apply w-full max-w-lg h-20 bg-red-500 rounded-t-3xl overflow-hidden transition-all
    }
    .viewForm {
        @apply w-full max-w-lg h-full bg-white px-5 sm:p-2 rounded-none overflow-hidden transition-all duration-1000
    }
</style>
