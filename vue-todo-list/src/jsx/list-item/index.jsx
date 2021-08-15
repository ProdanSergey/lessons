import { defineComponent } from "@vue/composition-api"

import styles from './list-item.module.css';

export default defineComponent({
	name: 'ListItem',
	props: {
		id: String,
		value: String,
		done: Boolean,
	},
  emits: ['todo:check', 'todo:change'],
	methods: {
		handleCheck(e) {
			this.$emit('todo:check', e.target.checked);
		},
		handleChange(e) {
			this.$emit('todo:change', e.target.value);
		}
	},
	render() {
		const { id, value, done } = this.$props;

		return (
			<li class={styles['list-item']}>
				<input 
					type="checkbox" 
					class="check"
					name={`check-todo-${id}`} 
					id={`check-${id}`}
					aria-label={`check-todo-${id}`}
					value="done" 
					onChange={this.handleCheck}
				/>
				<input 
					type="text" 
					class={[styles.text, { [styles.done]: done }]}
					name={`todo-${id}`}
					id={id} 
					aria-label={`todo-${id}`} 
					value={value} 
					readonly={done}
					onInput={this.handleChange}
				/>
				{this.$slots.default()}
			</li>
		)
	}
});