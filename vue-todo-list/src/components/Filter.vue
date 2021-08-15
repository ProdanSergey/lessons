<template>
	<label class="filter">
		<input class="input" type="checkbox" name="filter" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)">
		<span class="label">
			<slot />
		</span>
	</label>
</template>

<script>
export default {
	name: 'Filter',
	emits: ['update:modelValue'],
	props: {
		modelValue: {
			type: Boolean,
			required: true
		}
	}
}
</script>

<style scoped>
	.filter {
		display: flex;
		align-items: center;
	}

	.input {
		margin-right: 10px;
	}

	.label {
		text-transform: capitalize;
	}
</style>