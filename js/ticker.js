const tickers = document.querySelectorAll('.test-ticker');
console.log(tickers);


tickers.forEach(ticker => {
    let tickerInline = ticker.querySelector('.ticker__inline');
    console.log(tickerInline);
    
    let cloneInline = tickerInline.cloneNode(true);
    ticker.append(cloneInline)
});