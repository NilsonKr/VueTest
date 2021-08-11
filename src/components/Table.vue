<template>
	<section>
		<h2>Here goes the table...</h2>
		<em>{{ text }}</em>
	</section>
</template>

<script lang="ts">
export default {
	props: {
		text: String,
	},
};
</script>
