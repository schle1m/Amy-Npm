const {amy} = require("./index.js")
async function test() {
    const {image, status} = await amy.random();
    console.log("Amy Test Done!")
    console.log("\n#- Status", status)
    console.log("\n#-Image", image) 
}
test()
