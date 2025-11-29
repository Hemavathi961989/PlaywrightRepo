import test, {expect} from "@playwright/test"
test("Auto Retry Assertion",async({page})=>{

await page.goto("https://www.leafground.com/input.xhtml")
//assertion-> expect

await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled()
await page.getByPlaceholder("Babu Manickam").fill("Dilip")
//toBeEnabled()
//.toBeDisabled({timeout:10000})
//assertion -> default time is 5sec 
//hard assert -> one line code is failed also it stop execution
console.log("Assertion done")
})

test.only("Non Retry Assertion",async({page})=>{

await page.goto("https://www.leafground.com/input.xhtml")

const actValue= await page.title()
const expValue="Input components"

//soft assert -> expect.soft
expect.soft(actValue).toEqual(expValue)
console.log("Title matched")

})

