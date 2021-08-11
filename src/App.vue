<template>
	<div id="app">
		<TheNavBar />
		<router-view class="my-6 mx-10" />
	</div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
export default {
	components: {
		TheNavBar,
	},
};
</script>
