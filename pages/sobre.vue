<script setup lang="ts">
import { ref } from 'vue'

const cardData = [
	{
		title: 'How we design and code open-source projects?',
		author: 'Tania Andrew',
		image: 'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	},
	{
		title: 'Another Card Title 1',
		author: 'Author 1',
		image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
	},
	{
		title: 'Another Card Title 2',
		author: 'Author 2',
		image: 'https://example.com/image2.jpg',
	},
	{
		title: 'Another Card Title 3',
		author: 'Author 3',
		image: 'https://example.com/image3.jpg',
	},
	{
		title: 'Another Card Title 4',
		author: 'Author 4',
		image: 'https://example.com/image4.jpg',
	},
]

const isCardRotated = ref(false)
let currentCardIndex = 0

function rotateCard() {
	currentCardIndex = (currentCardIndex + 1) % cardData.length
	isCardRotated.value = !isCardRotated.value
}
</script>

<template>
	<section class="bg-gradient-to-br from-sky-500 dark:from-blue-700 to-pink-500 dark:to-red-950 min-h-screen flex items-center justify-center">
		<div class="grid grid-cols-2 gap-8">
			<div
				:class="{ hidden: isCardRotated }"
				class="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700"
			>
				<div
					:style="{ 'background-image': `url(${cardData[currentCardIndex].image})` }"
					class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
				>
					<div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50" />
				</div>
				<div class="relative p-6 px-6 py-14 md:px-12">
					<h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
						{{ cardData[currentCardIndex].title }}
					</h2>
					<h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
						{{ cardData[currentCardIndex].author }}
					</h5>
				</div>
			</div>

			<div
				:class="{ hidden: !isCardRotated }"
				class="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700"
			>
				<div
					class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-gradient-to-br from-sky-500 dark:from-blue-700 to-pink-500 dark:to-red-950"
				>
					<div class="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50" />
				</div>
				<div class="relative p-6 px-6 py-14 md:px-12">
					<h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
						Another Card Title
					</h2>
					<h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
						Another Author
					</h5>
					<!-- Adicione mais conteúdo aqui conforme necessário -->
				</div>
			</div>
		</div>

		<button class="mt-8 flip-button" @click="rotateCard">
			Flip Card
		</button>
	</section>
</template>

<style scoped>
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  pointer-events: none;
}

.flip-button {
  background-color: #3490dc;
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.flip-button:hover {
  background-color: #2779bd;
}
</style>
