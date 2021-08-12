<template>
	<div class="w-full min-w-table min-h-table h-table overflow-y-scroll">
		<div
			v-for="turn in turnList"
			:key="turn.id"
			class="grid grid-cols-6 place-items-center border-b border-pink-200 h-cell"
		>
			<h2>{{ turn.name }}</h2>
			<h2>{{ turn.checkIn }} am - {{ turn.checkOut }} pm</h2>
			<h2>{{ turn.breakTime }} min</h2>
			<h2>{{ turn.totalHours }} hrs</h2>
			<h2>{{ turn.position.name }}</h2>
			<div class="text-center">
				<h2 v-for="location in turn.locations" :key="location.id">
					{{ location.name ? location.name : '------' }}
				</h2>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		turnList: Array,
	},
};
</script>
