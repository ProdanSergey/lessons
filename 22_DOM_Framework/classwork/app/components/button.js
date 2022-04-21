class Button extends BaseComponent {
	render() {
		const { text } = this.props;

		return Framework.create("button", {}, [text]);
	}
}
