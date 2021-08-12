<template>
	<div
		@click.self="closeModal()"
		class="absolute inset-0 flex justify-center items-center bg-gray-700 bg-opacity-25 z-10"
	>
		<div class="relative w-10/12 h-3/5 bg-white rounded-xl p-6 overflow-y-scroll">
			<img
				class="absolute right-6 cursor-pointer"
				@click="closeModal()"
				src="../assets/cancel.svg"
				alt="Close"
				width="55px"
				height="55px"
			/>
			<h2 class="font-bold text-4xl text-blue-500">Registro de usuario</h2>
			<form
				class="mt-8 flex flex-wrap justify-around items-center w-full text-lg font-semibold"
			>
				<label class="w-full md:w-2/5">
					Nombres
					<input
						required
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="text"
						name="firstName"
						placeholder="Nombres"
						v-model="userSelected.firstName"
					/>
				</label>
				<label class="block my-4 w-full md:w-2/5">
					Apellidos
					<input
						required
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="text"
						name="lastName"
						placeholder="Apellidos"
						v-model="userSelected.lastName"
					/>
				</label>
				<label class="w-full md:w-4/5">
					E-mail
					<input
						required
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="text"
						name="email"
						placeholder="alguien@example.com"
						v-model="userSelected.email"
					/>
				</label>
				<label class="block my-4 w-full md:w-3/12">
					Fecha de nacimiento
					<input
						required
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="date"
						name="dateOfBirth"
						v-model="userSelected.dateOfBirth"
					/>
				</label>
				<label class="w-full md:w-3/12">
					ID de empleado
					<input
						required
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="text"
						name="employeeId"
						placeholder="00.000.000-Q"
						v-model="userSelected.employeeId"
					/>
				</label>
				<label class="block w-full my-4 md:w-3/12">
					Tipo de contrato
					<input
						required
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="number"
						name="contract"
						placeholder="1 - 2"
						min="1"
						max="2"
						v-model="userSelected.contract"
					/>
				</label>
			</form>
			<button
				@click="handleOptions()"
				class="bg-purple-500 hover:bg-purple-700 text-white font-bold my-6 py-2 px-4 rounded-full focus:outline-none"
			>
				{{ moreOptions ? 'Show more options ▲' : 'Hide more options ▼' }}
			</button>
			<div class="w-full flex flex-wrap justify-around items-center" v-show="moreOptions">
				<label class="w-full md:w-1/5">
					ID de Sucursal
					<input
						required
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="number"
						name="locationId"
						placeholder="1 - 3"
						max="3"
						min="1"
						v-model="userSelected.locationId"
					/>
				</label>
				<label class="w-full md:w-1/5">
					ID de cargo
					<input
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="number"
						name="positionId"
						placeholder="1 - 8"
						max="8"
						min="1"
						v-model="userSelected.positionId"
					/>
				</label>
				<label class="w-full md:w-1/5">
					Direccion
					<input
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="text"
						name="address"
						placeholder="00.000.000-Q"
						v-model="userSelected.address"
					/>
				</label>
				<label class="w-full md:w-1/5">
					Telefono
					<input
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="text"
						name="phone"
						placeholder="00.000.000-Q"
						v-model="userSelected.phone"
					/>
				</label>
				<label class="w-full mt-4 md:w-4/5">
					Url de Imagen
					<input
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="text"
						name="avatarUrl"
						placeholder="https://someimageurl.jpg"
						v-model="userSelected.avatarUrl"
					/>
				</label>
			</div>
			<button
				@click="submit('POST')"
				class="block mt-10 mx-auto bg-blue-400 hover:bg-blue-300 text-white text-3xl font-bold py-4 px-4 border-b-4 border-blue-500 hover:border-blue-400 rounded-xl"
			>
				Ingresar
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		closeModal: Function,
		userSelected: Object,
		submit: Function,
	},

	data() {
		return {
			moreOptions: false,
		};
	},

	methods: {
		handleOptions() {
			this.moreOptions = !this.moreOptions;
		},
	},
};
</script>
