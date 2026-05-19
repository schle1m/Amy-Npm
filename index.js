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
const amy = { random, test};
module.exports = { amy };