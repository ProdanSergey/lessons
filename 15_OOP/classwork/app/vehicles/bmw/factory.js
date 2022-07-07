const BMW_MODELS = {
  M5: "M5",
};

const BMWFactory = (model) => {
  switch (model) {
    case BMW_MODELS.M5:
      return M5Factory();

    default:
      throw new Error("No such model on factory");
  }
};
