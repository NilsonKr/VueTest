<template>
	<div>
		<section class="w-full h-screen">
			<div class="grid grid-cols-5 place-items-center">
				<h2>Nombre Completo</h2>
				<h2>Cargo</h2>
				<h2>Sucursales</h2>
				<h2>Horas/Semana</h2>
				<h2>N°de Identificacion</h2>
			</div>
			<div v-if="userList.values.length" class="w-full h-full bg-green-300">
				<div
					v-for="user in userList.values"
					:key="user.employeeId"
					class="grid grid-cols-5 justify-items-center"
				>
					<h2>{{ user.firstName }} {{ user.lastName }}</h2>
					<!-- <h2>{{ user.firstName }} {{ user.lastName }}</h2> -->
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
	computed: mapState(['userList', 'positionList', 'locationList']),

	async created() {
		if (!this.userList.values.length) {
			await this.INITIAL_DATA();
		}
	},

	async updated() {
		console.log('updated');
		if (!this.userList.isParse) {
			console.log('Has to be parsed');
			this.setUsers(
				parseUsers(this.userList.values, this.locationList, this.positionList)
			);
		}
	},
};
</script>
