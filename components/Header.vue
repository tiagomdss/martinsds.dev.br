<script setup lang="ts">
const isDark = computed({
	get() {
		return useColorMode().value === 'dark'
	},
	set() {
		useColorMode().preference = useColorMode().value === 'dark' ? 'light' : 'dark'
	},
})
const { t } = useI18n()
</script>

<template>
	<nav class="navbar bg-transparent dark:bg-transparent transition-colors duration-500 ease-in-out fixed w-full z-50">
		<div class="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
			<a href="/" class="flex space-x-3 rtl:space-x-reverse animate-shake">
				<span class="self-center text-3xl whitespace-nowrap text-slate-900 dark:text-white">Tiago Martins</span>
			</a>
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
			<div id="navbar-cta" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mr-48">
				<ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
					<li>
						<p class="cursor-pointer text-slate-900 dark:text-white relative inline-flex items-center one group hover:space-x-0">
							<span>{{ t("inicio") }}</span>
							<span class="absolute bottom-0 left-0 w-0 transition-all duration-700 h-1 bg-blue-500 group-hover:w-[50%]" />
							<span class="absolute bottom-0 right-0 w-0 transition-all duration-700 h-1 bg-red-500 group-hover:w-[50%]" />
						</p>
					</li>
					<li>
						<p class="cursor-pointer text-slate-900 dark:text-white relative inline-flex items-center one group hover:space-x-0">
							<span>Sobre</span>
							<span class="absolute bottom-0 left-0 w-0 transition-all duration-700 h-1 bg-blue-500 group-hover:w-[50%]" />
							<span class="absolute bottom-0 right-0 w-0 transition-all duration-700 h-1 bg-red-500 group-hover:w-[50%]" />
						</p>
					</li>
					<li>
						<p class="cursor-pointer text-slate-900 dark:text-white relative inline-flex items-center one group hover:space-x-0">
							<span>Projetos</span>
							<span class="absolute bottom-0 left-0 w-0 transition-all duration-700 h-1 bg-blue-500 group-hover:w-[50%]" />
							<span class="absolute bottom-0 right-0 w-0 transition-all duration-700 h-1 bg-red-500 group-hover:w-[50%]" />
						</p>
					</li>
					<li>
						<p class="cursor-pointer text-slate-900 dark:text-white relative inline-flex items-center one group hover:space-x-0">
							<span>Certificados</span>
							<span class="absolute bottom-0 left-0 w-0 transition-all duration-700 h-1 bg-blue-500 group-hover:w-[50%]" />
							<span class="absolute bottom-0 right-0 w-0 transition-all duration-700 h-1 bg-red-500 group-hover:w-[50%]" />
						</p>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
