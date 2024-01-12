<script setup lang="ts">
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

interface Card {
	image: string
	title: string
	description: string
	skills: string[]
	icons: string[]
}

const cardElement: Ref<HTMLElement | null> = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(cardElement)

const cards: Card[] = [
	{
		image: '../tiago.jpg',
		title: 'Quer saber mais sobre mim?',
		description: '',
		skills: [''],
		icons: [''],
	},
	{
		image: '../tiago.jpg',
		title: 'Vida Pessoal',
		description: 'Sou uma pessoa extremamente comunicativa e sempre disposta a aprender mais. Gosto de estar sempre rodeada de amigos e, principalmente, fazer o que mais amo: jogar videogame. Para mim, jogar videogame é melhor que chocolate.',
		skills: [''],
		icons: [''],
	},
	{
		image: '../tiago.jpg',
		title: 'Vida Profissional',
		description: 'Sou uma pessoa dedicada que começou a vida como auxiliar administrativo. Mesmo nessa área, sempre demonstrei meu amor pela computação, pois gostava de criar, dar ideias e ajudar quando necessário em outras áreas. Depois que parti para a vida na programação web e Java, nunca mais quis voltar atrás e descobri minha verdadeira vocação.',
		skills: [''],
		icons: [''],
	},
	{
		image: '../tiago.jpg',
		title: 'Conhecimentos Gerais',
		description: '',
		skills: ['HTML/CSS (Todos deviam conhecer isso pelo menos.)', 'Javascript', 'TypeScript'],
		icons: ['skill-icons:html', 'skill-icons:javascript', 'skill-icons:typescript'],
	},
]

const currentCardIndex = ref(0)

const currentCard = computed(() => cards[currentCardIndex.value])

const cardTransform = computed(() => {
	const MAX_ROTATION = 6

	const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
	const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

	return isOutside.value
		? ''
		: `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})

function changeCard() {
	if (cardElement.value) {
		cardElement.value.classList.add('rotate-animation')

		setTimeout(() => {
			currentCardIndex.value = (currentCardIndex.value + 1) % cards.length

			cardElement.value?.classList.remove('rotate-animation')
		}, 500)
	}
}
</script>

<template>
	<section class="bg-gradient-to-br min-h-screen flex items-center justify-center">
		<div
			ref="cardElement"
			class="card h-[30rem] w-[30rem] rounded overflow-hidden shadow-lg"
			:style="{ transform: cardTransform }"
		>
			<div>
				<div class="flex w-full justify-center pt-5">
					<img class="w-[7rem] h-[7rem] rounded-full" :src="currentCard.image" alt="">
				</div>
				<div class="px-6">
					<div class=" text-3xl pt-10 mb-2 text-cyan-50 text-center">
						{{ currentCard.title }}
					</div>
					<p class="text-cyan-50 text-base">
						{{ currentCard.description }}
					</p>
					<ul>
						<li v-for="(skill, index) in currentCard.skills" :key="skill" class="text-cyan-50 text-base flex items-center mb-2">
							<div class="mr-2">
								<Icon :name="currentCard.icons[index]" color="white" size="1.5rem" />
							</div>
							{{ skill }}
						</li>
					</ul>
				</div>
				<div class="flex px-6 pb-2 justify-center">
					<button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded" @click="changeCard">
						Próximo
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.card {
  transition: transform 0.5s ease-out;
}

.rotate-animation {
  animation: rotateYAnimation 0.5s ease-out;
}

@keyframes rotateYAnimation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
