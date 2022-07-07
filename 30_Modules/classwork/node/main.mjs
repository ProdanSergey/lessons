import { alertInfo, alertWarn } from "./helpers/alert.mjs";

alertInfo("Hello Dark Side");
alertWarn("Node JS is Awesome!");

(async () => {
  const { run } = await import("./promise.mjs");

  run();
})();
