export function formatAmountForDisplay(amount) {
  let numberFormat = new Intl.NumberFormat(['en-IN']);
  return numberFormat.format(amount);
}
