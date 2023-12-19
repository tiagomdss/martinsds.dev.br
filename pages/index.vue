<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
	<section class="bg-gradient-to-br from-sky-500 dark:from-blue-700 to-pink-500 dark:to-red-950  min-h-[calc(100.6vh-6px)] w-full h-screen flex flex-col items-center justify-center">
		<div class="w-52 h-52 rounded-full overflow-hidden">
			<img src="../assets/tiago.jpg" alt="Your Name" class="w-full h-full object-cover">
		</div>
		<div class="text-center mt-4">
			<h2 class="text-6xl text-slate-900 dark:text-white">
				Tiago Martins
			</h2>
			<p class="text-slate-900 dark:text-white text-2xl">
				{{ t("oi") }}
			</p>
		</div>
	</section>
</template>
