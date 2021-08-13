<template>
	<div style="height: 800px" class="flex flex-col items-center justify-around">
		<h1 class="welcome--title">{{ title }}</h1>
		<div class="relative">
			<img
				src="../assets/logo.png"
				alt="Logo"
				style="min-width: 250px"
				height="300px"
				width="300px"
			/>
			<span class="flex h-8 w-8 lg:h-16 lg:w-16 absolute -top-14 -left-10 lg:-left-20">
				<span
					style="animation-duration: 1s; animation-delay: 3.5s"
					class="animate-ping absolute inline-flex h-8 w-8 lg:h-16 lg:w-16 rounded-full bg-yellow-500 opacity-75"
				></span>
				<span
					class="relative inline-flex rounded-full h-8 w-8 lg:h-16 lg:w-16 bg-yellow-300"
				></span>
			</span>
			<span class="flex h-8 w-8 lg:h-16 lg:w-16 absolute bottom-10 -left-10">
				<span
					style="animation-duration: 2s; animation-delay: 0.5s"
					class="animate-ping absolute inline-flex h-8 w-8 lg:h-16 lg:w-16 rounded-full bg-pink-400 opacity-75"
				></span>
				<span
					class="relative inline-flex rounded-full h-8 w-8 lg:h-16 lg:w-16 bg-pink-500"
				></span>
			</span>
			<span class="flex h-8 w-8 lg:h-16 lg:w-16 absolute top-0 -right-10 lg:-right-20">
				<span
					style="animation-duration: 1.5s; animation-delay: 1.5s"
					class="animate-ping absolute inline-flex h-8 w-8 lg:h-16 lg:w-16 rounded-full bg-purple-400 opacity-75"
				></span>
				<span
					class="relative inline-flex rounded-full h-8 w-8 lg:h-16 lg:w-16 bg-purple-500"
				></span>
			</span>
			<span class="flex h-8 w-8 lg:h-16 lg:w-16 absolute -bottom-10 right-0">
				<span
					style="animation-duration: 0.8s; animation-delay: 2.5s"
					class="animate-ping absolute inline-flex h-8 w-8 lg:h-16 lg:w-16 rounded-full bg-blue-200 opacity-75"
				></span>
				<span
					class="relative inline-flex rounded-full h-8 w-8 lg:h-16 lg:w-16 bg-blue-300"
				></span>
			</span>
		</div>
		<div
			class="sections__container flex justify-center flex-wrap mt-14 text-3xl lg:space-x-8"
		>
			<button
				class="my-2 bg-blue-500 transition duration-1000 hover:ring-4 ring-indigo-300 text-white font-bold py-2 px-4 rounded"
			>
				<router-link to="/users">Usuarios...</router-link>
			</button>
			<button
				class="my-2 bg-pink-500 transition duration-1000 hover:ring-4 ring-pink-300 text-white font-bold py-2 px-4 rounded"
			>
				<router-link to="/locations">Sucursales...</router-link>
			</button>
			<button
				class="my-2 bg-yellow-400 transition duration-1000 hover:ring-4 ring-yellow-200 text-white font-bold py-2 px-4 rounded"
			>
				<router-link to="/calendar">Calendario...</router-link>
			</button>
			<button
				class="my-2 bg-purple-500 transition duration-1000 hover:ring-4 ring-purple-300 text-white font-bold py-2 px-4 rounded"
			>
				<router-link to="/shifts">Turnos...</router-link>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Bienvenido/a !',
		};
	},
};
</script>

<style scoped>
.welcome--title {
	font-size: 3.5rem;
	font-weight: bold;
	opacity: 0;
	animation: entrance 3s;
	animation-delay: 0.3s;
	animation-fill-mode: forwards;
}

.sections__container {
	opacity: 0;
	animation: entrance 2s;
	animation-delay: 1.5s;
	animation-fill-mode: forwards;
}

@keyframes entrance {
	0% {
		opacity: 0;
		transform: rotateX(90deg);
	}

	50% {
		transform: rotateX(0deg);
	}

	100% {
		opacity: 1;
	}
}
</style>
