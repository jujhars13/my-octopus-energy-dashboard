import raw from "../data/data.json";

const startDateTime = "2022-07-02T23:00:00+01:00";
const endDateTime = "2021-07-05T00:30:00+01:00";

const data = {
  raw,
  periodTotalKw: 1221,
  meta: {
    recordCount: raw.count,
    startDateTime,
    endDateTime,
  },
};

export { data };
