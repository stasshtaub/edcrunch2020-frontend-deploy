const tickers = document.querySelectorAll('.test-ticker');

tickers.forEach(ticker => {
    let tickerInline = ticker.querySelector('.ticker__inline');
    let cloneInline = tickerInline.cloneNode(true);
    ticker.append(cloneInline)
});