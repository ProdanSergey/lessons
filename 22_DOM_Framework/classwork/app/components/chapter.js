class Chapter extends BaseComponent {
	state = {
		active: true,
	};

	onToggleClick = () => {
		this.setState((prevState) => ({ active: !prevState.active }));
	};

	render() {
		const { active } = this.state;

		return Framework.create(
			"article",
			{
				class: "chapter",
				"data-key": "TEST_KEY",
			},
			[
				new ChapterHeader({ active, title: "Lorem ipsum, dolor sit amet", onClick: this.onToggleClick }),
				active
					? new ChapterBody({
							body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis odit provident hic ullam non delectus nisi mollitia accusamus ab quae, fuga aspernatur rem dolorem? Sint nisi quae aliquam possimus nihil.",
					  })
					: null,
			]
		);
	}
}
