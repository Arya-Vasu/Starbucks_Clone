export const debuggerLog = (...args) => {
  console.log(...args);
};

export const errorLog = (...args) => {
  console.error("Error==>", ...args);
};

export const warnLog = (...args) => {
  console.warn("Warning==>", ...args);
};
