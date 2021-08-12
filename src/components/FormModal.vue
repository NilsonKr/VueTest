<template>
	<div
		@click.self="closeModal()"
		class="absolute inset-0 flex justify-center items-center bg-gray-700 bg-opacity-25 z-10"
	>
		<div class="relative w-10/12 h-3/5 bg-white rounded-xl p-6">
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
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="date"
						name="dateOfBirth"
						v-model="userSelected.dateOfBirth"
					/>
				</label>
				<label class="w-full md:w-3/12">
					ID de empleado
					<input
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
						class="w-full px-3 py-2 text-sm text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="number"
						name="contract"
						placeholder="1 - 2"
						min="1"
						max="2"
						v-model="userSelected.contract.id"
					/>
				</label>
			</form>
			<button
				@click="submit()"
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
};
</script>
