<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
	import { register } from 'swiper/element/bundle'
    import { pizzas } from '@/assets/data/db.json'
    
    register()

    const emit = defineEmits(['slideInit', 'slideClick', 'slideChange'])
	const swiper = ref(null)    

    onMounted(() => {
		const swiperParams = {
			slidesPerView: 1,
			centeredSlides: true,
			effect: 'creative',
			creativeEffect: {
                prev: {
                    scale: .4,
                    translate: [-185, 170, 0],
                    rotate: [0,0,180]
                },
                next: {
                    scale: .4,
                    translate: [185, 170, 0],
                    rotate: [0,0,180]
                }
			},
			on: {
			    init({slides, activeIndex}) {
                    emit('slideInit', {slides, activeIndex})
                    slides[activeIndex].children[0].style.filter = "drop-shadow(0px 0px 10px rgba(0,0,0,.7))"
		   	  	},
		   	  	slideChange({slides, previousIndex, activeIndex}){
                    emit('slideChange', {slides, previousIndex, activeIndex})

                    slides[activeIndex].children[0].style.filter = "drop-shadow(0px 0px 10px rgba(0,0,0,.7))"
                    slides[previousIndex].children[0].style.filter = ""
		   	  	},
		   	  	click(e){
                    emit('slideClick', e)
		   	  	}
		   	},
		}
		Object.assign(swiper.value, swiperParams);
		swiper.value.initialize();

        pizzas.forEach(pizza => {
            if(pizza.id === 0) return
            swiper.value.swiper.appendSlide(`
                <swiper-slide class="min-w-64 w-64 flex justify-center items-center">
                    <img data-pizzaId="${pizza.id}" class="min-w-64 w-64 transition-all duration-500" src="./pizzas-top-view/${pizza.image2}" draggable="false">
                </swiper-slide>
            `)
        })

        swiper.value.swiper.slideTo(useRoute().query.id)

	})
</script>

<template>
    <swiper-container class="w-full h-[30rem]" init="false" ref="swiper">
        <swiper-slide class="min-w-64 w-64 flex justify-center items-center">
            <img data-pizzaId="0" class="min-w-64 w-64 transition-all duration-500" :src="'./pizzas-top-view/pizza-1.png'" draggable="false">
        </swiper-slide>
        <!-- <swiper-slide class="min-w-64 w-64 flex justify-center items-center">
                <img class="min-w-64 w-64 transition-all duration-500" src="@/assets/imagens/pizzas-top-view/pizza-2.png" draggable="false">
            </swiper-slide>
            <swiper-slide class="min-w-64 w-64 flex justify-center items-center">
                <img class="min-w-64 w-64 transition-all duration-500" src="@/assets/imagens/pizzas-top-view/pizza-3.png" draggable="false">
            </swiper-slide>
            <swiper-slide class="min-w-64 w-64 flex justify-center items-center">
                <img class="min-w-64 w-64 transition-all duration-500" src="@/assets/imagens/pizzas-top-view/pizza-3.png" draggable="false">
            </swiper-slide> -->
        </swiper-container>
</template>