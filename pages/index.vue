<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
	<section class="bg-gradient-to-br from-blue-500 to-red-500 h-screen flex justify-center items-center text-white ">
		<div class="animate-shake text-center">
			<h1 class="uppercase text-9xl animate-fade-left animate-duration-1000 animate-delay-1000 animate-ease-linear ">
				{{ t("oi") }}
			</h1>
		</div>
	</section>
</template>
