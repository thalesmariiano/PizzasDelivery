<script setup>
    import { ref, computed, watch } from 'vue'
    import animate from '@/assets/utils/animate'

    const nameElement  = ref('')
    const priceElement = ref('')

    const props = defineProps(['pizzaSelected', 'pizzaInfo']) 
    const pizza = computed(() => props.pizzaInfo)
    const pizzaSelected = computed(() => props.pizzaSelected)

    watch(pizza, newPizza => {
        animate(nameElement.value, 'animate__flipInX')
        animate(priceElement.value, 'animate__flipInX')
    })

</script>

<template>
    <div :class="pizzaSelected ? 'menu-default menu-toppings' : 'menu-default menu-slider' ">
        
        <transition
            enter-active-class="animate__animated animate__bounceInUp"
            leave-active-class="animate__animated animate__fadeOutDown"
        >
            <p v-show="!pizzaSelected" ref="nameElement" class="text-xl leading-5 font-bold text-center ">{{ pizza.name }}</p>
        </transition>

        <transition
            enter-active-class="animate__animated animate__bounceInUp"
            leave-active-class="animate__animated animate__zoomOut"
        >
            <div v-show="!pizzaSelected" class="flex justify-center items-center">
                <img src="@/assets/icons/star_on.svg">
                <img src="@/assets/icons/star_on.svg">
                <img src="@/assets/icons/star_on.svg">
                <img src="@/assets/icons/star_on.svg">
                <img src="@/assets/icons/star_on.svg">
            </div>
        </transition>

        <div :class="pizzaSelected ? 'mb-32' : 'mb-5'">
            <p ref="priceElement" class="text-center font-serif text-3xl my-7 font-bold">R${{ pizza.price }}</p>
            <div class="flex gap-5 justify-center items-center mt-3">
                <label class="choose-size">
                    <input class="w-0 h-0" type="radio" name="size" value="small">
                    S
                </label>
                <label class="choose-size">
                    <input class="w-0 h-0" type="radio" name="size" value="medium" checked>
                    M
                </label>
                <label class="choose-size">
                    <input class="w-0 h-0" type="radio" name="size" value="large">
                    L
                </label>
            </div>
        </div>

        <transition
            enter-active-class="animate__animated animate__bounceInUp"
            leave-active-class="animate__animated animate__fadeOutDown"
        >
            <div v-show="pizzaSelected" class="absolute">
                <p class="text-sm text-neutral-400 text-center mb-3">Complementos (Max 3)</p>
                <div class="flex gap-3 ">
                    <button class="toppings-button">
                        <img class="w-10" src="@/assets/icons/cogumelo.png">
                    </button>
                    <button class="toppings-button">
                        <img class="w-10" src="@/assets/icons/picles.png">
                    </button>
                    <button class="toppings-button">
                        <img class="w-10" src="@/assets/icons/cebola.png">
                    </button>
                    <button class="toppings-button">
                        <img class="w-10" src="@/assets/icons/batata.png">
                    </button>
                </div>
            </div>
        </transition>

        <button @click="$emit('buyed')" class="buy-pizza-button">
            <img class="w-8" src="@/assets/icons/cart3.svg">
        </button>
    </div>
</template>

<style scoped>
    .menu-default {
        @apply relative flex flex-col items-center bg-gradient-to-t transition-all duration-500
    }
    .menu-toppings {
        @apply w-96 h-[28rem] justify-end from-white to-neutral-100 rounded-lg shadow-menu2 pb-16 
    }
    .menu-slider {
        @apply w-56 h-80 mt-28 justify-start from-white/50 from-50% rounded-b-full shadow-menu pt-20
    }
    
    .choose-size {
        @apply w-9 h-9 font-semibold transition-all has-[:checked]:bg-neutral-100/70 has-[:checked]:shadow-md has-[:checked]:text-red-500 rounded-full cursor-pointer flex justify-center items-center
    }
    .toppings-button {
        @apply p-1 bg-neutral-200 text-neutral-400 rounded-full hover:scale-110 transition-all duration-500
    }

    .buy-pizza-button {
        @apply p-3 cursor-pointer shadow-cart-button absolute -bottom-5 rounded-lg bg-gradient-to-t from-orange-500 from-50% to-yellow-300
    }

</style>