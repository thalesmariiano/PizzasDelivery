<script setup>
    import { ref } from 'vue'
    import DeliveryMethodModal from './DeliveryMethodModal.vue'
    import BaseModal from './BaseModal.vue'

    const showModal  = ref(false)
    const deliveryMethod = ref('Entrega')

    const getMethod = method => deliveryMethod.value = method
    
</script>

<template>
    <button @click="showModal = true" class="h-12 flex gap-x-3 items-center bg-neutral-100 border border-neutral-300 px-3 py-2 rounded">
        <img v-if="deliveryMethod !== 'Entrega'" src="@/assets/icons/motorcycle.svg">
        <img v-if="deliveryMethod !== 'Retirada'" src="@/assets/icons/person-walking.svg">
        {{ deliveryMethod  }}

        <img src="@/assets/icons/chevron-down.svg">
    </button>

    <transition
        enter-active-class="animate__animated animate__fadeIn"
		leave-active-class="animate__animated animate__fadeOut"
    >
        <BaseModal v-show="showModal">
            <transition
                enter-active-class="animate__animated animate__bounceInUp"
                leave-active-class="animate__animated animate__fadeOutDown"
            >
                <DeliveryMethodModal
                    v-show="showModal"
                    @close="showModal = false"
                    @method="getMethod"
                />      
            </transition>
        </BaseModal>
    </transition>
    
</template>