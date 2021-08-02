// price array "a-price"
const priceArray = Array.from(document.getElementsByClassName("a-price"));

priceArray.map((el) => {
  const priceWhole = el.getElementsByClassName("a-price-whole")[0];
  const priceFraction = el.getElementsByClassName("a-price-fraction")[0];

  if (priceSymbol && priceWhole && priceFraction) {
    const prev = priceWhole.innerHTML.replace(/\D/g, "");
    const next = priceFraction.innerHTML.replace(/\D/g, "");

    // Calculate KRW based on exchange rate $1 = 1,150
    const koreanPrice =
      Number(`${prev.replace(/\D/g, "")}.${next.replace(/\D/g, "")}`) * 1150;
    el.innerHTML = `<span class='a-price-symbol'>₩</span><span class='a-price-whole'>${Math.round(
      koreanPrice
    ).toLocaleString()}</span>`;
  }
});
