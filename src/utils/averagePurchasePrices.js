export default function averagePurchasePrices(position, order){
  return (
    (position.quantity * position.purchasePrice + order.quantity * order.askPrice)/(position.quantity + order.quantity)
  )
}
