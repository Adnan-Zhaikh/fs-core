//1. strict layout configuration for a stock trade
interface StockTrader {
    tradeId: number;
    tickerSymbol: string;
    sharesCount: number;
    purchasePrice: number;
    isBuyOrder: boolean;
}

//2. a Valid data objects
const activeTrade: StockTrader = {
    tradeId: 5001,
    tickerSymbol: "AAPL",
    sharesCount: 10,
    purchasePrice: 320.50,
    isBuyOrder: true 
};

printTradeSummary(activeTrade); //Hoisting: a feature that runs before initializing the function.

function printTradeSummary(trade: StockTrader): void {
    console.log(`-- Processing Financial Order ID: ${trade.tradeId}--`);

    const totalCost = trade.sharesCount * trade.purchasePrice;

    if (trade.isBuyOrder) {
        console.log(`ORDER ACTION: Executing BY for ${trade.sharesCount} shares of ${trade.tickerSymbol}`);
        console.log(`Total Capital Outflow: $${totalCost.toFixed(2)}`);
    } else {
        console.log(`ORDER ACTION: Executing SELL for ${trade.sharesCount} shares of ${trade.tickerSymbol}`);
        console.log(`Total Capital Inflow: $${totalCost.toFixed(2)}`);
    }
}