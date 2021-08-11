<template>
	<div>
		<section class="w-full">
			<div class="mb-6 w-full flex items-center justify-between">
				<h1 class="text-4xl font-semibold">{{ title }}</h1>
				<button
					class="bg-green-300 hover:bg-green-200 text-white text-lg font-bold py-4 px-4 border-b-4 border-green-500 hover:border-green-300 rounded-xl"
				>
					Agregar
				</button>
			</div>
			<div class="grid grid-cols-6 place-items-center bg-green-200 p-4 rounded-t-2xl">
				<h2>Nombre Completo</h2>
				<h2>Cargo</h2>
				<h2>Sucursales</h2>
				<h2>Horas/Semana</h2>
				<h2>N°de identificacion</h2>
			</div>
			<UsersTable v-if="userList.values.length" :userList="userList" />
		</section>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import UsersTable from '../components/UsersTable.vue';
import { parseUsers } from '../utils/parsing';

export default {
	components: { UsersTable },

	data() {
		return {
			title: 'Vista de Usuarios',
		};
	},

	methods: {
		...mapMutations(['setUsers']),
		...mapActions(['INITIAL_DATA']),
		parseData() {
			const parsedUsers = parseUsers(
				this.userList.values,
				this.locationList.values,
				this.positionList,
				this.contractList
			);

			this.setUsers({ isParse: true, values: parsedUsers });
		},
	},
	computed: mapState(['userList', 'positionList', 'locationList', 'contractList']),

	created() {
		if (!this.userList.isParse) {
			this.parseData();
		}
	},

	watch: {
		userList() {
			if (!this.userList.isParse) {
				this.parseData();
			}
		},
	},
};
</script>
