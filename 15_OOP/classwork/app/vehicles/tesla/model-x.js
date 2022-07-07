const ModelXFactory = () => {
  return new Tesla(
    { model: "Model X" },
    new Computer(),
    new GPS(),
    new AutoPilot()
  );
};
