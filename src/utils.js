const cash = new Map();

export const pow = (base, power) => {
  const key = `${base}^${power}`;
  if (!cash.has(key)) {
    cash.set(key, base ** power);
  }
  return cash.get(key);
};

export const sum = (...args) =>
  args.reduce((accum, currentItem) => accum + currentItem, 0);
