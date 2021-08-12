<template>
	<div>
		<section class="w-full">
			<div class="mb-6 w-full flex items-center justify-between">
				<h1 class="text-4xl font-semibold">{{ title }}</h1>
				<button
					@click="handleModal(null, 'POST')"
					class="bg-green-300 hover:bg-green-200 text-white text-lg font-bold py-4 px-4 border-b-4 border-green-500 hover:border-green-300 rounded-xl"
				>
					Agregar
				</button>
			</div>
			<section class="overflow-x-scroll lg:overflow-x-auto">
				<div
					class="min-w-table grid grid-cols-6 place-items-center bg-green-200 p-4 rounded-t-2xl font-semibold text-lg"
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
import validateForm from '../utils/validateForm';
import USER_PLACEHOLDER from '../utils/userPlaceHolder';

export default {
	components: { UsersTable, FormModal },

	data() {
		return {
			userSelected: USER_PLACEHOLDER,
			title: 'Vista de Usuarios',
			showModal: false,
			action: '',
		};
	},

	methods: {
		...mapMutations(['setUsers']),
		...mapActions(['INITIAL_DATA', 'API_REQUEST', 'API_DELETE']),
		parseData() {
			const parsedUsers = parseUsers(
				this.userList.values,
				this.locationList.values,
				this.positionList,
				this.contractList
			);

			this.setUsers({ isParse: true, values: parsedUsers });
		},

		handleModal(value, action) {
			this.userSelected = USER_PLACEHOLDER;
			this.action = action;
			if (value) {
				this.showModal = value;
			} else {
				this.showModal = !this.showModal;
			}
		},

		async remove(userInfo) {
			await this.API_DELETE({
				id: userInfo.id,
			});
			//Removing user from the UI
			const newList = [...this.userList.values];
			const removedUserIndex = newList.findIndex(user => user.id === userInfo.id);
			newList.splice(removedUserIndex, 1);

			this.setUsers({ isParse: true, values: newList });
		},

		edit(userInfo) {
			this.showModal = true;
			this.action = 'PUT';
			this.userSelected = { ...userInfo };
		},

		submit() {
			const newUser = {
				...this.userSelected,
				contract: parseInt(this.userSelected.contract.id),
			};
			const isValid = validateForm(newUser);

			if (!isValid.error) {
				if (this.action === 'POST') {
					this.API_REQUEST({ method: this.action, data: newUser }).then(data => {
						//Parse the new user and add to the view
						const parsedUser = parseUsers(
							[data],
							this.locationList.values,
							this.positionList,
							this.contractList
						);

						this.setUsers({
							isParse: true,
							values: [...parsedUser, ...this.userList.values],
						});
					});
				}

				if (this.action === 'PUT') {
					this.API_REQUEST({
						method: this.action,
						data: newUser,
						id: newUser.id,
					}).then(data => {
						console.log(data);
					});
				}
			}
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
