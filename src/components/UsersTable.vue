<template>
	<div class="w-full min-w-table min-h-table h-table overflow-y-scroll">
		<div
			v-for="user in userList.values"
			:key="user.id"
			class="grid grid-cols-6 place-items-center border-b border-green-200 h-cell"
		>
			<h2>{{ user.firstName }} {{ user.lastName }}</h2>
			<div
				title="positions"
				class="w-full h-full flex flex-col justify-center items-center bg-gray-50"
			>
				<h2 v-for="charge in user.positions" :key="charge.id">{{ charge.name }}</h2>
			</div>
			<div title="locations">
				<h2 v-for="location in user.locations" :key="location.id">
					{{ location.name }}
				</h2>
			</div>
			<div
				title="hoursPerWeek"
				class="w-full h-full flex flex-col justify-center items-center bg-gray-50"
			>
				<h2>{{ user.contract.legalMaxWeeklyHours }}h</h2>
			</div>
			<h2>{{ user.employeeId }}</h2>
			<div>
				<button
					@click="edit(user)"
					class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-md"
				>
					Editar
				</button>
				<button
					@click="remove(user)"
					class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-full ml-4"
				>
					Borrar
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		userList: Object,
		edit: Function,
		remove: Function,
	},
};
</script>
