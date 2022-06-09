async function get({ params }) {
  const { tile } = params;
  const externalhost = `https://wolfiex.github.io/ONS_Maptiles/LSOA/`;
  console.error("eh", externalhost, tile);
  const res = await fetch(`${externalhost}${tile}`);
  const data = await res;
  console.error("rt", data.statusText, data);
  return JSON.parse(data.body);
}
export { get };
