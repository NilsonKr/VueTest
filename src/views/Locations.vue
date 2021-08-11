<template>
	<div>
		<section class="w-full">
			<h1 class="text-4xl font-semibold mb-6">{{ title }}</h1>
			<div
				class="grid grid-cols-4 place-items-center bg-purple-200 p-4 rounded-t-2xl text-xl font-semibold"
			>
				<h2>Nombre</h2>
				<h2>Horario</h2>
				<h2>Dirección completa</h2>
				<h2>N°de usuarios</h2>
			</div>
			<div class="grid grid-cols-4 place-items-center h-8">
				<div
					class="w-full h-full font-semibold grid grid-cols-3 place-items-center col-start-3 col-end-4 text-lg border-2 border-purple-200 border-t-0"
				>
					<span>Direccion</span>
					<div
						class="w-full h-full flex justify-center items-center border-l-2 border-r-2 border-purple-200"
					>
						<span>Municipio</span>
					</div>
					<span>Región</span>
				</div>
			</div>
			<LocationsTable :locationList="locationList" />
		</section>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import LocationsTable from '../components/LocationsTable.vue';
import { parseLocations } from '../utils/parsing';

export default {
	components: { LocationsTable },

	data() {
		return {
			title: 'Sucursales',
		};
	},

	computed: mapState(['locationList', 'userList']),
	methods: {
		...mapMutations(['setLocations']),
		...mapActions(['INITIAL_DATA']),
		parseData() {
			const parsedData = parseLocations(this.locationList.values, this.userList.values);
			this.setLocations({ isParse: true, values: parsedData });
		},
	},

	created() {
		if (!this.locationList.isParse) {
			this.parseData();
		}
	},

	watch: {
		locationList() {
			if (!this.locationList.isParse) {
				this.parseData();
			} else {
				console.log('has been parsed');
			}
		},
	},
};
</script>

<style scoped></style>
