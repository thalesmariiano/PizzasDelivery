<script setup>
    import { ref } from 'vue'
    import Navigation from '@/components/Navigation.vue'
    import Bag from '@/components/Bag.vue'
    import PizzaSection from '@/components/PizzaSection.vue'
    import AppFooter from '@/components/AppFooter.vue'
    import ComboSection from '@/components/ComboSection.vue'
    import BebidasSection from '@/components/BebidasSection.vue'
    import DeliveryMethod from '@/components/DeliveryMethod.vue'
    import AppHeader from '@/components/AppHeader.vue'
    import ProductModal from '@/components/ProductModal.vue'
    import BaseModal from '@/components/BaseModal.vue'

    const productsAmount = ref(0)
    const showDetails    = ref(false)
    const pizza          = ref('')

    function showPizza(p){
        showDetails.value = true
        pizza.value       = p
    }


</script>

<template>
    <AppHeader />
    <section class="px-2 sm:px-5">
        <div>
            <label class="w-full flex gap-3 items-center bg-neutral-200 px-2 py-2.5 rounded-md mt-5">
                <img src="@/assets/icons/search.svg">
                <input class=" w-full bg-transparent outline-none" type="text" placeholder="Buscar Produto" name="search_product" autocomplete="off">
            </label>
        </div>
        <div class="w-full flex gap-5 justify-center items-center mt-7">
            <DeliveryMethod /> 

            <button class="h-12 flex gap-x-3 items-center bg-neutral-100 border border-neutral-300 px-3 py-2 rounded">
                <img src="@/assets/icons/alarm.svg">
                <div class="text-left">
                    <p class="font-semibold">Hoje</p>
                    <p class="text-neutral-500 text-sm">20-30 min - R$ 0,00</p>
                </div>
            </button>
        </div>
    </section>   

    <ComboSection @clicked="showDetails = true"/>

    <div class="w-full h-12 bg-neutral-100 my-5"></div>

    <PizzaSection @getPizza="showPizza" />

    <div class="w-full h-12 bg-neutral-100 my-5"></div>

    <BebidasSection @clicked="showDetails = true"/>

    <div class="w-full h-12 bg-neutral-100 my-5"></div>

    <transition
        enter-active-class="animate__animated animate__fadeIn"
		leave-active-class="animate__animated animate__fadeOut"
    >
        <BaseModal v-show="showDetails">
            <transition
                enter-active-class="animate__animated animate__bounceInUp"
                leave-active-class="animate__animated animate__fadeOutDown"
            >
                <ProductModal
                    v-show="showDetails"
                    @close="showDetails = false"
                    :pizza
                />
            </transition> 
        </BaseModal>
    </transition>

    <Transition
        enter-active-class="animate__animated animate__fadeInUp"
		leave-active-class="animate__animated animate__fadeOutDown"
    >
        <Bag
            v-show="productsAmount"
            :productsAmount
        />
    </Transition>

    <Navigation />

    <AppFooter
        class="mt-10 mb-10 pb-28"
    />
</template>

<style>
    .combo-scroll::-webkit-scrollbar {
        width: 0px;
        height: 2px;
    }
</style>