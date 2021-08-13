<template>
	<nav
		id="nav"
		class="sticky flex flex-wrap justify-center p-4 space-x-6 bg-white shadow-md w-full lg:justify-start"
	>
		<router-link to="/" class="w-10"
			><img src="../assets/logo.png" alt="Home"
		/></router-link>
		<ul
			class="flex flex-wrap justify-center items-center space-x-4 font-sans font-semibold text-lg"
		>
			<li>
				<router-link to="/users">Usuarios</router-link>
			</li>
			<li>
				<router-link to="/locations">Sucursales</router-link>
			</li>
			<li>
				<router-link to="/calendar">Calendario</router-link>
			</li>
			<li>
				<router-link to="/shifts">Turnos</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {};
</script>

<style scoped>
li {
	position: relative;
	overflow: hidden;
}
li::after {
	content: '';
	position: absolute;
	bottom: 0px;
	left: -100%;
	width: 100%;
	height: 3px;
	background-color: rgb(30, 221, 255);
	transition: transform 0.5s;
}

li:hover::after {
	transform: translateX(100%);
}
</style>
