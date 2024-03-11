export function plus(a, b) {
  const result = Number(a) + Number(b);

  if (Number.isInteger(result)) {
    return result;
  } else {
    return parseFloat(result.toFixed(8));
  }
}

export function minus(a, b) {
  const result = Number(a) - Number(b);

  if (Number.isInteger(result)) {
    return result;
  } else {
    return parseFloat(result.toFixed(8));
  }
}

export function devide(a, b) {
  const result = Number(a) / Number(b);

  if (Number.isInteger(result)) {
    return result;
  } else {
    return parseFloat(result.toFixed(8));
  }
}

export function multiply(a, b) {
  const result = Number(a) * Number(b);

  if (Number.isInteger(result)) {
    return result;
  } else {
    return parseFloat(result.toFixed(8));
  }
}