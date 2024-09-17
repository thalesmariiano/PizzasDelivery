<template>
    <div class="w-full bg-white border border-neutral-300 rounded-md p-2">
        <p class="text-lg font-semibold text-center mt-5">Como quer receber o seu pedido?</p>

        <div class="w-full space-y-3 mt-5">
            <label class="w-full h-26 bg-neutral-100 has-[:checked]:border-red-500 transition-all flex justify-between items-center border border-neutral-300 p-2 rounded-md cursor-pointer">
                <div class="flex gap-5 items-center">
                    <img class="w-7" src="@/assets/icons/motorcycle.svg">
                    <div>
                        <span class="font-semibold">Entrega</span> <br>
                        <span class="text-sm text-neutral-400">A gente leva até você.</span>
                    </div>
                </div>

                <input @click="e => $emit('method', e.target.value)" class="w-5 h-5 accent-red-500" type="radio" name="delivery-method" value="Entrega" checked>
            </label>

            <label class="w-full h-26 bg-neutral-100 has-[:checked]:border-red-500 transition-all flex justify-between items-center border border-neutral-300 p-2 rounded-md cursor-pointer">
                <div class="flex gap-5 items-center">
                    <img class="w-7" src="@/assets/icons/person-walking.svg">
                    <div>
                        <span class="font-semibold">Retirada</span> <br>
                        <span class="text-sm text-neutral-400">Você retira no local.</span>
                    </div>
                </div>
                            
                <input @click="e => $emit('method', e.target.value)" class="w-5 h-5 accent-red-500" type="radio" name="delivery-method" value="Retirada">
            </label>
        </div>

        <button @click="$emit('close')" class="w-full py-3 text-center text-white font-semibold bg-red-500 rounded mb-5 mt-7">Confirmar Entrega</button>
    </div>
</template>