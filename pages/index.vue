<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
	<section class="bg-gradient-to-br from-blue-500 to-red-500 min-h-[calc(100vh-68px)] overflow-y-hidden flex justify-center items-center text-white ">
		<div class="animate-shake text-center">
			<h1 class="uppercase text-9xl animate-fade-left animate-duration-1000 animate-delay-1000 animate-ease-linear ">
				{{ t("oi") }}
			</h1>
			<p class="text-2xl">
				Tiago Martins
			</p>
		</div>
	</section>
</template>
