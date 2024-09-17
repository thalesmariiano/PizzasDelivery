<script setup>
    import { ref } from 'vue'
    import { pizzas } from '@/assets/data/db.json'
    import AppHeader from '@/components/AppHeader.vue'
    import PizzaMenu from '@/components/makepizzaview/PizzaMenu.vue'
    import PizzaSlider from '@/components/makepizzaview/PizzaSlider.vue'

    const plate            = ref('')
    const pizzaBox         = ref('')
    const pizzaImage       = ref('')
    const particlesCircle  = ref('')
    const slider_container = ref('')

    const pizzaInfo      = ref(pizzas[0])
    const activeSlide    = ref('')
    const pizzaSelected  = ref(false)

    const selected_pizza_image = ref('/pizzas-top-view/blank.png')

    function slideInit({slides, activeIndex}){
        activeSlide.value = slides[activeIndex]
    }

    function slideClick({slides, activeIndex}){
		pizzaSelected.value = true

        selected_pizza_image.value = slides[activeIndex].children[0].src

        particlesCircle.value.style.transform += 'scale(0)'
        plate.value.style.transform += "scale(1.05) rotateZ(-30deg)"
        plate.value.style.margin = "0 30px 30px"

        pizzaImage.value.style.transform += "scale(1.05) rotateZ(-30deg)"
        pizzaImage.value.style.margin = "0 30px 30px"
    }

    function slideChange({slides, activeIndex, previousIndex}){
        activeSlide.value = slides[activeIndex]

        const pizzaId = slides[activeIndex].children[0].dataset.pizzaid
        pizzaInfo.value = pizzas[pizzaId]

        const rotateZ = activeIndex > previousIndex ? 'rotateZ(50deg)' : 'rotateZ(-50deg)'
        particlesCircle.value.style.transform += rotateZ
    }

    function pizzaBuyed(){
        slider_container.value.style.display = 'none'
        selected_pizza_image.value = activeSlide.value.children[0].src

        particlesCircle.value.style.transform += 'scale(0)'
        plate.value.style.transform += "scale(0) rotateZ(-180deg)"
        pizzaBox.value.style.transform += "scale(1)"
        pizzaBox.value.style.opacity = 1

        pizzaImage.value.style.transform += "scale(0) rotateZ(-180deg)"
    }

</script>

<template>
    <div class="w-full absolute top-0 left-0">
        <AppHeader class="bg-neutral-100" />
    </div>

    <div class="w-full h-screen flex flex-col justify-center items-center pt-52 bg-neutral-100 overflow-hidden">
        <div class="w-full relative flex justify-center items-center">
            
            <img ref="pizzaBox" class="pizza-box" src="@/assets/imagens/pizza-box.png">
            <img ref="particlesCircle" class="particles-circle" src="@/assets/imagens/particles-circle.png">
            <img ref="plate" class="pizza-plate" src="@/assets/imagens/pizza-plate.png">
            <img ref="pizzaImage" class="pizza-image" :src="selected_pizza_image">

            <div ref="slider_container" v-show="!pizzaSelected" class="w-full absolute z-50">
                <PizzaSlider
                    @slideInit="slideInit"
                    @slideClick="slideClick"
                    @slideChange="slideChange"
                />
            </div>
        </div>

        <PizzaMenu
            :pizzaInfo
            :pizzaSelected
            @buyed="pizzaBuyed"
        />
    </div>
      
</template>

<style scoped>
    .pizza-box {
        @apply min-w-64 w-64 absolute scale-[0.1] opacity-0 z-[50] transition-all duration-1000
    }

    .particles-circle {
        @apply min-w-[22.5rem] w-[22.5rem] transition-all duration-300 absolute
    }

    .pizza-plate {
        @apply min-w-72 w-72 plate-shadow absolute z-40 transition-all duration-500
    }

    .pizza-image {
        @apply min-w-64 w-64 z-50 absolute transition-all duration-500
    }

    .plate-shadow {
        filter: drop-shadow(0px 15px 15px rgba(0,0,0,.4));
    }
</style>