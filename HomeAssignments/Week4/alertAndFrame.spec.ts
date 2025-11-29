import {test,expect } from "@playwright/test"

test("Handling alert and frame", async({page})=>{

    page.on('dialog',alertType=>{

        const type = alertType.type()
        console.log(type)
        const message = alertType.message()
        console.log(message)

        if(type==='alert')
        {
        alertType.accept()  
        }
        else if(type==='confirm')
        {
            alertType.accept()
        }
        else
            {
                alertType.dismiss()
            }
    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    const frame = page.frameLocator("#iframeResult")

    await frame.locator('text=Try it').click()
    await expect(frame.locator("#demo")).toHaveText("You pressed OK!")

    /*await page.frameLocator("#iframeResult").locator("//button[text()='Try it']").click()

    await page.waitForTimeout(3000)

    const locator = page.locator("//p[@id='demo']")
    
   expect(locator).toHaveText("You pressed OK!")*/
})