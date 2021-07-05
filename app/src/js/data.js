import raw from "../data/data.json";

const startDateTime = raw.results.map((el) => el.interval_start).slice(-1);
const endDateTime = raw.results.map((el) => el.interval_end)[0];
const periodTotalKwh = raw.results
  .map((el) => el.consumption)
  .reduce((acc = 0, cur) => {
    return acc + cur;
  });
// sum the values between the hours of 00:30 and 04:30
const cheapPeriodConsumption = 3;
// subtract cheapPeriod from total consumption to give us rest of usage
const peakPeriodConsumption = periodTotalKwh - cheapPeriodConsumption;

const data = {
  raw,
  periodTotalKwh,
  meta: {
    recordCount: raw.count,
    startDateTime,
    endDateTime,
  },
  cheapPeriodConsumption,
  peakPeriodConsumption,
};

export { data };
