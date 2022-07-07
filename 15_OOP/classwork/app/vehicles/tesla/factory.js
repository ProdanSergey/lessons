const TESLA_MODELS = {
  MODEL_X: "MODEL_X",
};

const TeslaFactory = (model) => {
  switch (model) {
    case TESLA_MODELS.MODEL_X:
      return ModelXFactory();

    default:
      throw new Error("No such model on factory");
  }
};
