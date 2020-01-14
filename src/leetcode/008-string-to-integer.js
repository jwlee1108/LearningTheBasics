export default function myAtoi(str) {
  const pStr = Number.parseInt(str, 10);

  if (pStr >= 2 ** 31) {
    return 2 ** 31 - 1;
  }

  if (pStr < -(2 ** 31)) {
    return -(2 ** 31);
  }

  if (!Number.isInteger(pStr)) {
    return 0;
  }

  return pStr;
}
