<template>
	<div>
		<section class="w-full">
			<div class="mb-6 w-full flex items-center justify-between">
				<h1 class="text-4xl font-semibold">{{ title }}</h1>
				<button
					class="bg-green-300 hover:bg-green-300 text-white text-lg font-bold py-4 px-4 border-b-4 border-green-300 hover:border-green-300 rounded-xl"
				>
					Agregar
				</button>
			</div>
			<div class="grid grid-cols-6 place-items-center bg-green-200 p-4 rounded-t-2xl">
				<h2>Nombre Completo</h2>
				<h2>Cargo</h2>
				<h2>Sucursales</h2>
				<h2>Horas/Semana</h2>
				<h2>N°de Identificacion</h2>
			</div>
			<div
				v-if="userList.values.length"
				class="w-full min-h-table h-table overflow-y-scroll"
			>
				<div
					v-for="user in userList.values"
					:key="user.employeeId"
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
					<h2>{{ user.employeeId }}h</h2>
					<div>
						<button
							class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-md"
						>
							Editar
						</button>
						<button
							class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-full ml-4"
						>
							Borrar
						</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import parseUsers from '../utils/parseUsers';

export default {
	data() {
		return {
			title: 'Vista de Usuarios',
		};
	},

	methods: {
		...mapMutations(['setUsers']),
		...mapActions(['INITIAL_DATA']),
	},
	computed: mapState(['userList', 'positionList', 'locationList', 'contractList']),

	async created() {
		if (!this.userList.values.length) {
			await this.INITIAL_DATA();
		}
	},

	async updated() {
		if (!this.userList.isParse) {
			const parsedUsers = parseUsers(
				this.userList.values,
				this.locationList,
				this.positionList,
				this.contractList
			);

			this.setUsers({ isParse: true, values: parsedUsers });
		}
	},
};
</script>
