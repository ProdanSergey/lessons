class ChapterHeader extends BaseComponent {
  render() {
    const { active, title, onClick } = this.props;

    return Framework.create(
      "header",
      {
        class: "chapter-header",
        "@click": onClick,
      },
      [title, new Button({ text: active ? "🔽" : "🔼" })]
    );
  }
}
