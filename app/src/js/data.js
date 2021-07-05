import raw from "../data/data.json";
// const today = new Date();
// today.setUTCHours(0, 0, 0);
// const yesterday = new Date();
// yesterday.setDate(yesterday.getDate() - 1);
// yesterday.setUTCHours(0, 0, 0);
// console.log({ today: today.toUTCString(), yesterday: yesterday.toUTCString() });

// the api returns data slightly outside of the 24h period we're interested in
const endDateTime = new Date(raw.results.map((el) => el.interval_end)[0]);
endDateTime.setUTCHours(0, 0, 0);
const startDateTime = new Date();
startDateTime.setDate(endDateTime.getDate() - 1);
startDateTime.setUTCHours(0, 0, 0);
// we just want the data between startDateTime and endDateTime, throw away the rest
const dataSet = raw.results.filter((el) => {
  if (
    new Date(el.interval_end) < endDateTime &&
    new Date(el.interval_end) > startDateTime
  ) {
    return el;
  }
});

const periodTotalKwh = dataSet
  .map((el) => el.consumption)
  .reduce((acc = 0, cur) => {
    return acc + cur;
  });

// sum the values between the hours of 00:30 and 04:30
const cheapPeriodConsumption = dataSet
  .map((el) => {
    const cheapStartPeriod = new Date(el.interval_start);
    cheapStartPeriod.setUTCHours(0, 30, 0);
    const cheapEndPeriod = new Date(el.interval_start)
    cheapEndPeriod.setUTCHours(4, 30, 0);
    const startTime = new Date(el.interval_start);
    const endTime = new Date(el.interval_end);

    if (endTime <= cheapEndPeriod && startTime >= cheapStartPeriod) {
      console.log({cheapStartPeriod, cheapEndPeriod, endTime, startTime})
      return el.consumption;
    }
    return 0;
  })
  .reduce((acc = 0, cur) => {
    return acc + cur;
  });

// subtract cheapPeriod from total consumption to give us rest of usage
const peakPeriodConsumption = periodTotalKwh - cheapPeriodConsumption;

const data = {
  raw,
  periodTotalKwh,
  meta: {
    recordCount: dataSet.length,
    startDateTime,
    endDateTime,
  },
  cheapPeriodConsumption,
  peakPeriodConsumption,
};

export { data };
