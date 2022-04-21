const FRAMEWORK_UTILS = (() => {
  const isObject = (v) => typeof v === "object" && !Array.isArray(v) && v !== null;
  const isFunction = (v) => typeof v === "function";
  const isString = (v) => typeof v === "string";

  const forEach = (target, callback) => {
    if (target === undefined) {
      return;
    }

    const iterable = isObject(target) ? Object.keys(target) : target;

    iterable.forEach((element, index) => {
      callback(element, index, target);
    });
  };

  const capitalize = (target) => {
    if (!isString(target)) {
      return target;
    }

    const firstLetter = target[0];
    const rest = target.slice(1).toLowerCase();

    return firstLetter.toUpperCase() + rest;
  };

  const snakeToCamel = (target) => {
    if (!isString(target)) {
      return target;
    }

    return target.split("-").reduce((acc, word) => acc + capitalize(word), "");
  };

  const isLowerCase = (char) => {
    if (!isString(char)) {
      return false;
    }

    return char.charCodeAt() > 90;
  };

  const camelToSnake = (target) => {
    if (!isString(target)) {
      return target;
    }

    return Array.from(target).reduce((acc, char) => (acc + isLowerCase(char) ? char : "-" + char.toLowerCase()), "");
  };

  return {
    isObject, isFunction, isString, forEach, capitalize, snakeToCamel, camelToSnake
  }
})();