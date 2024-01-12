<template>
	<NuxtLoadingIndicator color="#2563eb" :height="5" />
	<Header />
	<main class="min-h-[calc(100vh-68px)]">
		<div class="from-sky-500 dark:from-blue-700 to-pink-500 dark:to-red-950">
			<slot />
		</div>
	</main>
	<!-- <Footer /> -->
</template>
