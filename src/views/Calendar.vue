<template>
	<div>
		<h1 class="text-xl font-semibold lg:text-4xl">{{ title }}📅</h1>
		<div
			class="w-full flex justify-center my-12 font-bold text-xl text-center lg:text-3xl"
		>
			<div
				:class="`p-6 rounded-l-3xl cursor-pointer ${
					tableSelect === 'assigned' ? 'bg-green-400  text-white' : 'bg-gray-200 '
				}`"
				@click="toggleTable('assigned')"
			>
				<h2>Assigned Turns</h2>
			</div>
			<div
				:class="`p-6 rounded-r-3xl cursor-pointer ${
					tableSelect === 'notAssigned' ? 'bg-green-400  text-white' : 'bg-gray-200 '
				}`"
				@click="toggleTable('notAssigned')"
			>
				<h2>Not Assigned Turns</h2>
			</div>
		</div>
		<section v-if="calendar.isParse">
			<NotAssignedTurns
				v-show="tableSelect === 'notAssigned'"
				:turnsList="calendar.values"
			/>
			<AssignedTurns
				v-show="tableSelect === 'assigned'"
				:turnsList="calendar.values"
				:userList="userList.values"
			/>
		</section>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { parseCalendar } from '../lib/parsing';
import NotAssignedTurns from '../components/NotAssignedTurns.vue';
import AssignedTurns from '../components/AssignedTurns.vue';

export default {
	components: {
		NotAssignedTurns,
		AssignedTurns,
	},

	data() {
		return {
			title: 'Calendario de turnos',
			tableSelect: 'assigned',
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

		toggleTable(value) {
			this.tableSelect = value;
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
