<template>
	<div class="w-full h-table overflow-x-scroll overflow-y-scroll">
		<div class="flex w-full">
			<div class="min-w-cell h-12 border-b-4 border-pink-400 text-center">
				<h2 class="text-2xl font-bold">Fechas</h2>
			</div>
			<section class="flex">
				<div v-for="(turns, date) in turnsList" :key="date" class="min-w-cell">
					<div class="h-full border-2 border-pink-200 text-center p-2 font-semibold">
						<h2>{{ date }}</h2>
					</div>
				</div>
			</section>
		</div>
		<div
			class="w-full min-w-table min-h-table h-full flex flex-col rounded-tl-2xl font-semibold text-lg"
		>
			<div v-for="user in assignedTurns" :key="user.id" class="flex">
				<div
					class="flex justify-center items-center p-2 w-cell min-w-cell min-h-cell h-cell border-4 border-t-0 border-pink-400 bg-pink-200 bg-opacity-10"
				>
					<h2 class="text-center">{{ user.name }}</h2>
				</div>
				<div
					v-for="(userTurns, date) in user.turns"
					:key="date + user.id"
					class="min-w-cell min-h-cell h-cell border-2 border-pink-200"
				>
					<div
						v-for="turn in userTurns"
						:key="turn.id + user.id"
						class="w-cell min-w-cell min-h-cell bg-pink-200 bg-opacity-10 text-center font-normal text-base"
					>
						<h2>ID: {{ turn.id }}</h2>
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
import { assignedTurns } from '../lib/parsing.js';

export default {
	props: {
		turnsList: Object,
		userList: Array,
	},

	data() {
		return {
			assignedTurns: [],
		};
	},

	methods: {
		parseData() {
			const turnsParse = assignedTurns(this.userList, this.turnsList);

			this.assignedTurns = turnsParse;

			console.log(this.assignedTurns);
		},
	},

	created() {
		this.parseData();
	},

	watch: {
		turnsList() {
			this.parseData();
		},
	},
};
</script>
