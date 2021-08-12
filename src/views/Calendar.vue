<template>
	<div>
		<NotAssignedTurns v-show="calendar.isParse" :turnsList="calendar.values" />
		<AssignedTurns v-show="calendar.isParse" :turnsList="calendar.values" />
		<!-- <div class="flex flex-col space-y-10">
			<div class="w-full text-center text-gray-600 font-bold text-lg">
				<p>Ejemplo de Tabla 1 Turnos No Asignados</p>
				<img
					src="../assets/turnos-no-asignados.png"
					alt="imagen ejemplo de turnos no asignados"
				/>
			</div>
			<div class="w-full text-center text-blue-500 font-bold text-lg">
				<p>Ejemplo de Tabla 2 Turnos Asignados</p>
				<img
					src="../assets/turnos-asignados.png"
					alt="imagen ejemplo de turnos asignados"
				/>
			</div>
		</div>-->
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { parseCalendar } from '../utils/parsing';
import NotAssignedTurns from '../components/NotAssignedTurns.vue';
import AssignedTurns from '../components/AssignedTurns.vue';

export default {
	components: {
		NotAssignedTurns,
		AssignedTurns,
	},

	data() {
		return {
			title: 'Turnos',
		};
	},
	computed: mapState(['calendar', 'userList', 'turnTemplateList']),

	methods: {
		...mapMutations(['setCalendar']),
		parseData() {
			const calendarParsed = parseCalendar(
				this.calendar.values,
				this.userList.values,
				this.turnTemplateList.values
			);

			this.setCalendar({ isParse: true, values: calendarParsed });
		},
	},

	created() {
		if (!this.calendar.isParse) {
			this.parseData();
		}
	},

	watch: {
		calendar() {
			if (!this.calendar.isParse) {
				this.parseData();
			}
		},
	},
};
</script>
