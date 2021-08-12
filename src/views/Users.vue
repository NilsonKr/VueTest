<template>
	<div>
		<section class="w-full">
			<div class="mb-6 w-full flex items-center justify-between">
				<h1 class="text-4xl font-semibold">{{ title }}</h1>
				<button
					@click="handleModal"
					class="bg-green-300 hover:bg-green-200 text-white text-lg font-bold py-4 px-4 border-b-4 border-green-500 hover:border-green-300 rounded-xl"
				>
					Agregar
				</button>
			</div>
			<section class="overflow-x-scroll lg:overflow-x-auto">
				<div
					class="min-w-table grid grid-cols-6 place-items-center bg-green-200 p-4 rounded-t-2xl"
				>
					<h2>Nombre Completo</h2>
					<h2>Cargo</h2>
					<h2>Sucursales</h2>
					<h2>Horas/Semana</h2>
					<h2>N°de identificacion</h2>
				</div>
				<UsersTable
					v-if="userList.values.length"
					:userList="userList"
					:edit="edit"
					:remove="remove"
				/>
			</section>
		</section>
		<FormModal
			v-show="showModal"
			:closeModal="handleModal"
			:userSelected="userSelected"
			:submit="submit"
		/>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import UsersTable from '../components/UsersTable.vue';
import FormModal from '../components/FormModal.vue';
import { parseUsers } from '../utils/parsing';

const USER_PLACEHOLDER = {
	firstName: '',
	lastName: '',
	email: '',
	dateOfBirth: '',
	contract: { id: '' },
	employeeId: '',
};

export default {
	components: { UsersTable, FormModal },

	data() {
		return {
			userSelected: USER_PLACEHOLDER,
			title: 'Vista de Usuarios',
			showModal: false,
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

		handleModal(value) {
			if (value) {
				this.showModal = value;
			} else {
				this.showModal = !this.showModal;
			}
		},

		remove(userInfo) {
			console.log(userInfo);
		},

		edit(userInfo) {
			this.showModal = true;
			this.userSelected = { ...userInfo };
		},

		submit() {
			console.log(this.userSelected);
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
