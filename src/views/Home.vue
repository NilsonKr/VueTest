<template>
	<div>
		<h1 class="text-3xl text-indigo-500">{{ mixTitle }}</h1>
		<span v-on:click="toggle">Show Day/Prices</span>
		<ul v-show="show">
			<li v-for="item in pricesWithDays" v-bind:key="item.day">
				{{ item.day }} - ${{ item.value }}
			</li>
		</ul>
		<input
			class="shadow appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			type="number"
			v-model="dollars"
			placeholder="Type Dollar Ammount"
		/>
		<span>${{ dollarsToBitcoin || 'Bitcoin Value' }}</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Vista Principal',
			pricesWithDays: [
				{ day: 'Lunes', value: 8400 },
				{ day: 'Martes', value: 7900 },
				{ day: 'Miercoles', value: 8200 },
				{ day: 'Jueves', value: 9000 },
				{ day: 'Viernes', value: 9400 },
				{ day: 'Sabado', value: 10000 },
				{ day: 'Domingo', value: 10200 },
			],
			show: true,
			dollars: 0,
			bitcoinPrice: 9600,
		};
	},

	mounted() {
		console.log('Mounted');
	},

	created() {
		console.log('Created');
	},

	computed: {
		mixTitle: vm => vm.title + '🦄',
		dollarsToBitcoin: vm => vm.dollars / vm.bitcoinPrice,
	},

	methods: {
		toggle() {
			this.show = !this.show;
		},
	},
};
</script>
