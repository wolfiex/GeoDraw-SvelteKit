import "../../../chunks/index-092899d0.js";
async function get({ params }) {
  const { path } = params;
  console.error("testing", path, await fetch(`http://localhost:7113/4/7/4.pbf`));
  return { body: ["helloa", path], status: 200 };
}
export { get };
