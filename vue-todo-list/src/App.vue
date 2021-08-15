<template>
	<main>
		<div class="container">
			<TodoList/>
		</div>
	</main>
</template>

<script>
import TodoList from './components/List.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
	.container {
		margin: 0 auto;
		max-width: 720px;
	}
</style>