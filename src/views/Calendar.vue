<template>
	<div class="bg-gray-200 rounded-md p-3">
		<h1 class="text-2xl text-gray-800">{{ title }}</h1>
		<div class="flex flex-col space-y-10">
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
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Turnos',
		};
	},
};
</script>
