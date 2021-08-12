<template>
	<div>
		<section class="overflow-x-scroll lg:overflow-x-auto">
			<h2 class="text-4xl font-semibold mb-6">{{ title }} ⚒</h2>
			<div
				class="min-w-table grid grid-cols-6 place-items-center bg-pink-300 p-4 rounded-t-2xl"
			>
				<h2>Nombre</h2>
				<h2>Hr de entrada - Hr de salida</h2>
				<h2>Descanso</h2>
				<h2>Horas trabajadas</h2>
				<h2>Cargo asociado</h2>
				<h2>Sucursales asociadas</h2>
			</div>
			<TurnTable :turnList="turnTemplateList.values" />
		</section>
	</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { parseTurnTemplates } from '../utils/parsing';
import TurnTable from '../components/TurnTable.vue';

export default {
	components: {
		TurnTable,
	},

	data() {
		return {
			title: 'Plantillas de turnos',
		};
	},

	computed: mapState(['locationList', 'positionList', 'turnTemplateList']),
	methods: {
		...mapMutations(['setTurnTemplates']),
		parseData() {
			const parsedData = parseTurnTemplates(
				this.turnTemplateList.values,
				this.locationList.values,
				this.positionList
			);

			this.setTurnTemplates({ isParse: true, values: parsedData });
		},
	},

	created() {
		if (!this.turnTemplateList.isParse) {
			this.parseData();
		}
	},

	watch: {
		turnTemplateList() {
			if (!this.turnTemplateList.isParse) {
				this.parseData();
			}
		},
	},
};
</script>
