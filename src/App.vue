<template>
	<div id="app">
		<TheNavBar />
		<router-view class="my-6 mx-10" />
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TheNavBar from './components/TheNavBar.vue';
export default {
	components: {
		TheNavBar,
	},

	computed: mapState(['userList']),
	methods: mapActions(['INITIAL_DATA']),

	async created() {
		if (!this.userList.values.length) {
			await this.INITIAL_DATA();
		}
	},
};
</script>

<style>
::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
	border-radius: 20px;
	background: #edf2f700;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #cbd5e0;
	border-radius: 100vh;
	border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #a0aec0;
}
</style>
