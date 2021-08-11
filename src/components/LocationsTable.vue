<template>
	<div class="w-full min-h-table h-table">
		<div
			v-for="location in locationList.values"
			:key="location.id"
			class="grid grid-cols-4 place-items-center border-b border-purple-200 h-cell"
		>
			<h2>{{ location.name }}</h2>
			<div>{{ location.startTime }} am - {{ location.endTime }} pm</div>
			<div
				class="w-full h-full grid grid-cols-3 place-items-center text-center border-r border-l border-purple-200"
			>
				<div>
					{{ location.address1 }}
					{{ location.address2 }}
				</div>
				<div
					class="w-full h-full flex items-center justify-center border-r border-l border-purple-200"
				>
					<span>{{ location.commune }}</span>
				</div>
				<span>{{ location.region }}</span>
			</div>
			<h2>{{ location.quantity }} Usuarios</h2>
		</div>
	</div>
</template>

<script>
export default {
	props: { locationList: Object },
};
</script>
