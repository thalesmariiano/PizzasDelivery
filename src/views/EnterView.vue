<script setup>
    import { RouterLink } from 'vue-router'
    import AppFooter from '@/components/AppFooter.vue';
    import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
    <AppHeader />

    <section class="w-full flex flex-col items-center p-2 sm:p-5">
        <img src="@/assets/imagens/entregador.png" class="w-72 min-w-72 my-10" title="Entregador">

        <div class="w-full flex flex-col items-center">
            <p class="text-lg">Onde você quer receber seu pedido?</p>

            <div class="w-full max-w-96 mx-auto">
                <label class="w-full max-w-96 flex gap-3 items-center bg-neutral-200 px-2 py-2.5 rounded-md mt-5">
                    <img src="@/assets/icons/search.svg">
                    <input class="w-full bg-transparent outline-none" type="text" placeholder="Seu enderço e número" name="address" autocomplete="off">
                </label>
                 <a href="#" class="flex gap-2 items-center mt-3 text-sm text-neutral-500 hover:underline">
                    <img src="@/assets/icons/crosshair.svg" title="Simbolo de localização atual">
                    Usar minha localização atual
                </a>  
            </div>

            <div class="w-full space-y-5 text-center mt-16">
                <div>
                    <p class="text-neutral-700 font-semibold">Já tem um endereço salvo?</p>
                    <p class="text-neutral-400 text-sm">Entre na sua conta pra selecionar seu endereço.</p>
                </div>

                <RouterLink
                    to="/menu"
                    class="text-white px-8 py-1 font-semibold bg-red-500 rounded-md inline-block">
                    Entrar ou Cadastrar
                </RouterLink>
            </div>
        </div>
    </section>

    <AppFooter
        class="mt-16 pb-5"
    />
</template>