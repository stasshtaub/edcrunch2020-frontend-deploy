const tickers=document.querySelectorAll(".test-ticker");console.log(tickers),tickers.forEach(e=>{let t=e.querySelector(".test-ticker__inline");console.log(t);let c=t.cloneNode(!0);e.append(c)});