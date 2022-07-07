class ChapterBody extends BaseComponent {
  render() {
    const { body } = this.props;

    return Framework.create(
      "section",
      {
        className: "chapter-body",
      },
      [1, 2, 3, 4, 5].map(() => Framework.create("p", {}, [body]))
    );
  }
}
