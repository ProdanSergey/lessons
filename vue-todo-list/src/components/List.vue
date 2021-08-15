<template>
	<div class="timer">
		<span>Your spent time: {{ spendTime }}s.</span>
	</div>	
	<Filter v-if="todos.length" v-model="doneonly">show done only</Filter>
	<ul class="list">
		<ListItem 
			v-for="(todo, index) in filteredTodos" 
			v-bind="todo"
			:key="todo.id"
			@todo:change="handleChange(index, $event)"
			@todo:check="handleCheck(index, $event)" 
		>
			<button 
				:aria-label="`remove-todo-${todo.id}`"
				@click="handleDelete(index)"
			>
				X
			</button>
		</ListItem>
	</ul>
	<button @click="addTodo">+ Todo</button>
</template>

<script>
import { v4 as uuid } from 'uuid';

import Filter from './Filter.vue';
import ListItem from '../jsx/list-item';

export default {
	name: 'List',
	components: {
		Filter,
		ListItem
	},
	data() {
		return {
			todos: [],
			doneonly: false,
			spendTime: 0,
		}
	},
	computed: {
		filteredTodos({ todos, doneonly }) {
			return doneonly ? todos.filter(({ done }) => done) : todos;
		}
	},
	methods: {
		handleChange(index, value) {
			this.todos[index].value = value;
		},
		handleCheck(index, checked) {
			this.todos[index].done = checked;
		},
		handleDelete(index) {
			this.todos = this.todos.filter((_, i) => i !== index);
		},
		addTodo() {
			this.todos = [
				...this.todos,
				{
					id: uuid(),
					value: 'Enter todo text',
					done: false
				}
			]
		}
	},
	mounted() {
		this.timer = setInterval(() => {
			this.spendTime = this.spendTime + 1
		}, 1000);

		console.log(this.timer);
	},
	unmounted() {
		clearInterval(this.timer);
	}
}
</script>

<style scoped>
	.list {
		margin: 6px 0;
		padding: 0;
		list-style-type: none;
	}
	.timer {
		margin: 16px;
		display: flex;
		justify-content: flex-end;
	}
</style>