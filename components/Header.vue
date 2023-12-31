<script setup lang="ts">
import { useRouter } from 'vue-router'

const isDark = computed({
	get() {
		return useColorMode().value === 'dark'
	},
	set() {
		useColorMode().preference = useColorMode().value === 'dark' ? 'light' : 'dark'
	},
})

const { t, locale, setLocale } = useI18n()
const localePath = useLocalePath()
const idioma = computed({
	get() {
		return locale.value
	},
	set(val: string) {
		setLocale(val)
	},
})
</script>

<template>
	<nav class="navbar bg-transparent dark:bg-transparent transition-colors duration-500 ease-in-out fixed w-full z-50">
		<div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
			<a href="/" class="flex space-x-3 rtl:space-x-reverse animate-shake">
				<span class="self-center text-3xl whitespace-nowrap text-white">Tiago Martins</span>
			</a>
			<div id="navbar-cta" class="items-center justify-between hidden w-full md:flex md:w-auto  ">
				<ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
					<li>
						<p class="cursor-pointer text-white relative inline-flex items-center one group hover:space-x-0">
							<NuxtLink :to="localePath('/')">
								<span>{{ t("inicio") }}</span>
								<span class="absolute bottom-0 left-0 w-0 transition-all duration-700 h-1 bg-blue-500 group-hover:w-[50%]" />
								<span class="absolute bottom-0 right-0 w-0 transition-all duration-700 h-1 bg-red-500 group-hover:w-[50%]" />
							</NuxtLink>
						</p>
					</li>
					<li>
						<p class="cursor-pointer text-white relative inline-flex items-center one group hover:space-x-0">
							<NuxtLink :to="localePath('/sobre')">
								<span>{{ t("sobre") }}</span>
								<span class="absolute bottom-0 left-0 w-0 transition-all duration-700 h-1 bg-blue-500 group-hover:w-[50%]" />
								<span class="absolute bottom-0 right-0 w-0 transition-all duration-700 h-1 bg-red-500 group-hover:w-[50%]" />
							</NuxtLink>
						</p>
					</li>
					<li>
						<p class="cursor-pointer text-white relative inline-flex items-center one group hover:space-x-0">
							<span>{{ t("projetos") }}</span>
							<span class="absolute bottom-0 left-0 w-0 transition-all duration-700 h-1 bg-blue-500 group-hover:w-[50%]" />
							<span class="absolute bottom-0 right-0 w-0 transition-all duration-700 h-1 bg-red-500 group-hover:w-[50%]" />
						</p>
					</li>
					<li>
						<p class="cursor-pointer text-white relative inline-flex items-center one group hover:space-x-0">
							<span>{{ t("certificados") }}</span>
							<span class="absolute bottom-0 left-0 w-0 transition-all duration-700 h-1 bg-blue-500 group-hover:w-[50%]" />
							<span class="absolute bottom-0 right-0 w-0 transition-all duration-700 h-1 bg-red-500 group-hover:w-[50%]" />
						</p>
					</li>
				</ul>
			</div>
			<div class="flex space-x-6 justify-center items-center">
				<div class="flex md:order-2 text-2xl md:space-x-0 rtl:space-x-reverse">
					<Button @click="isDark = !isDark">
						<div v-if="!isDark">
							<Icon name="line-md:moon-filled-alt-to-sunny-filled-loop-transition" class="text-amber-500" />
						</div>
						<div v-else>
							<Icon name="line-md:moon-rising-twotone-alt-loop" class="text-gray-50" />
						</div>
					</Button>
				</div>
				<div class="flex md:order-2 text-2xl md:space-x-0 rtl:space-x-reverse">
					<Button @click="idioma = idioma === 'pt' ? 'en' : idioma === 'en' ? 'es' : 'pt'">
						<div v-if="idioma === 'pt'">
							<Icon name="openmoji:flag-brazil" />
						</div>
						<div v-else-if="idioma === 'en'">
							<Icon name="openmoji:flag-us-outlying-islands" />
						</div>
						<div v-else-if="idioma === 'es'">
							<Icon name="openmoji:flag-spain" />
						</div>
					</Button>
				</div>
			</div>
		</div>
	</nav>
</template>
