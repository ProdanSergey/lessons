<template>
	<li class='list-item'>
		<input 
			type="checkbox" 
			class="check"
			:name="`check-todo-${id}`" 
			:id="`check-${id}`" 
			:aria-label="`check-todo-${id}`" 
			:value="done" 
			@change="$emit('todo:check', $event.target.checked)"
		>
		<input 
			type="text" 
			:class="['text', { done }]"
			:name="`todo-${id}`" 
			:id="id" 
			:aria-label="`todo-${id}`" 
			:value="value" 
			:readonly="done"
			@input="$emit('todo:change', $event.target.value)"
		>
		<button 
			class="button" 
			:aria-label="`remove-todo-${id}`" 
			@click="$emit('todo:remove')"
		>
			X
		</button>
	</li>
</template>

<script>
export default {
	name: 'ListItem',
	props: {
		id: {
			type: String,
			required: true
		},
		value: {
			type: String,
			required: true
		},
		done: {
			type: Boolean,
			required: true
		}
	},
	emits: ['todo:check', 'todo:remove', 'todo:change']
}
</script>

<style scoped>
	.list-item {
		display: flex;
		align-items: center;
		padding: 6px 0;
	}

	.text {
		flex: 1;
		border: 0;
		border-bottom: 1px solid #000;
		padding: 6px;
	}

	.button {
		align-self: flex-end;
	}

	.check, .text {
		margin-right: 10px;
	}

	.done {
		text-decoration: line-through;
	}
</style>