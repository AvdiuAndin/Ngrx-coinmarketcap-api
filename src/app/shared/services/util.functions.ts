export function formatNumberBasedOnCurrency(numberToFormat, currency) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: 2})
    .format(numberToFormat);
}
