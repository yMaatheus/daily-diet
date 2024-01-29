export function onlyNumbersMask(value: string) {
  if (value.length === 0) return true;
  return value.replace(/[^\d]/g, "");
}
