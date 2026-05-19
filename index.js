async function  random() {
    const data = await fetch("https://amy-api.onrender.com/api/random")
    const json = await data.json()
    const image = json.url;
    const status = json.status;
    return {image, status}
}
export {random}