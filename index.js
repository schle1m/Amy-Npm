async function random() {
  const data = await fetch("https://amy-api.onrender.com/api/random");
  const json = await data.json();
  const image = json.url;
  const status = json.status;
  return { image, status };
}
async function test() {
  return "Succes" 
}
async function info(key) {
  const data = await fetch("https://amy-api.onrender.com/api/info")
  const json = await data.json()
  if (key) return json[key]
  return json
}
const amy = { random, test, info};
module.exports = { amy };