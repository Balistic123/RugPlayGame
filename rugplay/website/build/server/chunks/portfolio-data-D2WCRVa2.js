import { w as writable } from './index2-D4eROfHK.js';

const PORTFOLIO_SUMMARY = writable(null);
const PORTFOLIO_DATA = writable(null);
async function fetchPortfolioSummary() {
  try {
    const response = await fetch("/api/portfolio/summary");
    if (response.ok) {
      const data = await response.json();
      PORTFOLIO_SUMMARY.set(data);
      return data;
    }
  } catch (error) {
    console.error("Failed to fetch portfolio summary:", error);
  }
  return null;
}
async function fetchPortfolioData() {
  try {
    const response = await fetch("/api/portfolio/total");
    if (response.ok) {
      const data = await response.json();
      PORTFOLIO_DATA.set(data);
      PORTFOLIO_SUMMARY.set({
        baseCurrencyBalance: data.baseCurrencyBalance,
        totalCoinValue: data.totalCoinValue,
        totalValue: data.totalValue,
        currency: data.currency
      });
      return data;
    }
  } catch (error) {
    console.error("Failed to fetch portfolio data:", error);
  }
  return null;
}

export { PORTFOLIO_SUMMARY as P, PORTFOLIO_DATA as a, fetchPortfolioData as b, fetchPortfolioSummary as f };
//# sourceMappingURL=portfolio-data-D2WCRVa2.js.map
