export const isNotNullAndUndefined = (variable) => {
  if (typeof variable !== "undefined" && variable !== null) {
    return true;
  }
  return false;
};

export const isFunction = (func) => {
  if (typeof func == "function") {
    return true;
  }
  return false;
};
