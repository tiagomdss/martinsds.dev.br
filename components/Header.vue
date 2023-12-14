<script setup lang="ts">
const isDark = computed({
	get() {
		return useColorMode().value === 'dark'
	},
	set() {
		useColorMode().preference = useColorMode().value === 'dark' ? 'light' : 'dark'
	},
})
</script>

<template>
	<nav class="bg-white dark:bg-gray-900">
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
			<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse animate-shake">
				<img src="../assets/tiago.jpg" class="h-8 rounded-md" alt="Tiago Foto">
				<span class="self-center text-2xl  whitespace-nowrap dark:text-white ">Tiago Martins</span>
			</a>
			<div class="flex md:order-2 text-2xl space-x-3 md:space-x-0 rtl:space-x-reverse">
				<Button @click="isDark = !isDark">
					<div v-if="!isDark">
						<Icon name="line-md:moon-filled-alt-to-sunny-filled-loop-transition" class="text-amber-500" />
					</div>
					<div v-else>
						<Icon name="line-md:moon-rising-twotone-alt-loop" class="text-gray-50" />
					</div>
				</Button>
			</div>
			<div id="navbar-cta" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
				<ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
					<li>
						<p class="cursor-pointer text-black dark:text-white relative inline-flex items-center one group hover:space-x-0">
							<span>Inicio</span>
							<span class="absolute bottom-0 left-0 w-0 transition-all duration-700 h-1 bg-blue-500 group-hover:w-[50%]" />
							<span class="absolute bottom-0 right-0 w-0 transition-all duration-700 h-1 bg-red-500 group-hover:w-[50%]" />
						</p>
					</li>
					<li>
						<p class="cursor-pointer text-black dark:text-white relative inline-flex items-center one group hover:space-x-0">
							<span>Sobre</span>
							<span class="absolute bottom-0 left-0 w-0 transition-all duration-700 h-1 bg-blue-500 group-hover:w-[50%]" />
							<span class="absolute bottom-0 right-0 w-0 transition-all duration-700 h-1 bg-red-500 group-hover:w-[50%]" />
						</p>
					</li>
					<li>
						<p class="cursor-pointer text-black dark:text-white relative inline-flex items-center one group hover:space-x-0">
							<span>Projetos</span>
							<span class="absolute bottom-0 left-0 w-0 transition-all duration-700 h-1 bg-blue-500 group-hover:w-[50%]" />
							<span class="absolute bottom-0 right-0 w-0 transition-all duration-700 h-1 bg-red-500 group-hover:w-[50%]" />
						</p>
					</li>
					<li>
						<p class="cursor-pointer text-black dark:text-white relative inline-flex items-center one group hover:space-x-0">
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

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
