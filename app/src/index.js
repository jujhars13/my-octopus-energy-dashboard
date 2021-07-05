import { data } from "./js/data.js";
// TODO get live rates from curl 'https://api.octopus.energy/v1/products/GO-21-05-13/electricity-tariffs/E-1R-GO-21-05-13-E/standard-unit-rates/' \
const cheapPeriodPrice = 5;
const peakPeriodPrice = 15.64;

const cheapPeriodCost = data.cheapPeriodConsumption * cheapPeriodPrice;
const peakPeriodCost = data.peakPeriodConsumption * peakPeriodPrice;

const template = `
<p>Total Samples: ${data.meta.recordCount}</p>
<p>End Datetime: ${data.meta.endDateTime.toUTCString()}</p>
<p>Start Datetime: ${data.meta.startDateTime.toUTCString()}</p>
<p>Total Usage in period: ${data.periodTotalKwh.toFixed(4)} kWh</p>
<p>Cheap Period Consumption <em>(@ ${cheapPeriodPrice}p/kWh)</em>: ${data.cheapPeriodConsumption.toFixed(
  2
)} kWh | £${(cheapPeriodCost/100).toFixed(2)}</p>
<p>Peak Period Consumption <em>(@ ${peakPeriodPrice}p/kWh)</em>: ${data.peakPeriodConsumption.toFixed(
  2
)} kWh | £${(peakPeriodCost/100).toFixed(2)}</p>
`;

document.getElementById("container").innerHTML = template;

// document.getElementById("debug").innerHTML = `<code>${JSON.stringify(
//   data
// )}</code>`;
