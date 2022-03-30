<template>
	<div class="app-contain">
		<h1>this is a template project</h1>
		<span>use: vue2.x + webpack4.x + babel7.x </span>
		<br />
		<span class="button" @click="$router.push('index')">index</span>
		<span class="button" @click="$router.push('element')">element</span>
		<span class="button" @click="$router.push('vuetify')">vuetify</span>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			input: "",
		};
	},
};
</script>

<style lang="scss" scoped>
.app-contain {
	color: green;

	.button {
		border: 1px solid #ff0000;
		margin-right: 30px;
	}
}
</style>
