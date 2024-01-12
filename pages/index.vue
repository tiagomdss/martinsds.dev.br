<script setup lang="ts">
const { t } = useI18n()
useHead({
	title: t('home.title'),
})
</script>

<template>
	<section class="bg-gradient-to-br min-h-[calc(100.6vh-6px)] w-full h-screen flex flex-col items-center justify-center">
		<div class="w-52 h-52 rounded-full overflow-hidden">
			<img src="../assets/tiago.jpg" alt="Your Name" class="w-full h-full object-cover">
		</div>
		<div class="text-center mt-4">
			<h2 class="text-6xl text-white">
				Tiago Martins
			</h2>
			<p class="text-white text-2xl pt-2">
				{{ t("oi") }}
			</p>
		</div>
		<Button />
	</section>
</template>
