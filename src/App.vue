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
