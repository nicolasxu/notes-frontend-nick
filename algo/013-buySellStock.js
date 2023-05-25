// after you fully know the stock price after past 6 trading days.
// resprospectly, find best time to buy and sell stock and return the max profit

const stocks = [7, 1, 5, 3, 6, 4]


function solution(stocks) {
  let lowestPrice = stocks[0]
  let profit = 0
  for (let i = 0; i < stocks.length; i++) {
    const currentPrice = stocks[i]
    if (currentPrice < lowestPrice) {
      lowestPrice = currentPrice
    }
    profit = Math.max(profit, currentPrice - lowestPrice)
  }
  return profit
}


const res = solution(stocks)
console.log(res)
