import { data } from "./js/data.js";

const template = `
<p>Total Samples: ${data.meta.recordCount}</p>
<p>Start Datetime: ${data.meta.startDateTime}</p>
<p>End Datetime: ${data.meta.endDateTime}</p>
`;

document.getElementById("container").innerHTML = template;

document.getElementById("debug").innerHTML = `<code>${JSON.stringify(
  data
)}</code>`;
