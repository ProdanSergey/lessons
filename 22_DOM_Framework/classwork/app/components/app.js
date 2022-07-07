const App = () => {
  return Framework.create(
    "div",
    {},
    [1, 2, 3].map(() => new Chapter())
  );
};
