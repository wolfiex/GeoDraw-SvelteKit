async function get({ params }) {
  const { path } = params;
  console.error("testing2", path);
  return { body: [params], status: 200 };
}
export { get };
