<template>
	<div class="flex w-full min-h-table h-table overflow-x-scroll overflow-y-scroll">
		<div
			class="w-40 min-w-cell min-h-table h-table flex flex-col items-center border-4 border-pink-400 rounded-tl-2xl rounded-bl-2xl font-semibold text-lg"
		>
			<div class="w-full h-12 border-b-4 border-pink-400 text-center">
				<h2 class="text-2xl font-bold">Fechas</h2>
			</div>
			<div class="flex items-center justify-center w-full h-full">
				<h2 class="text-2xl font-bold">Turns</h2>
			</div>
		</div>
		<div
			v-for="(turns, date) in turnsList"
			:key="date"
			class="w-60 min-w-cell min-h-table h-table flex flex-col items-center border-2 border-l-0 border-pink-200"
		>
			<div class="w-full h-12 border-b-2 border-pink-200 text-center">
				<h2 class="text-lg font-bold">{{ date }}</h2>
			</div>
			<div class="w-full min-w-cell min-h-table h-table">
				<div v-for="turn in turns" :key="turn.id">
					<div
						v-if="!turn.user.length"
						class="w-full h-24 p-2 border-b-2 border-pink-200 text-center bg-pink-200 bg-opacity-10"
					>
						<h2 class="font-semibold">
							{{ turn.turnTemplate ? turn.turnTemplate.name : 'VACACIONES' }}
						</h2>
						<h2>
							(
							{{
								turn.turnTemplate
									? `${turn.turnTemplate.checkIn} - ${turn.turnTemplate.checkOut}`
									: '---'
							}}
							)
						</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		turnsList: Object,
	},
};
</script>
