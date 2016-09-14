export default function decimalRounder(val) {
  return (Math.round(val * 100)/100).toFixed(2)
}
