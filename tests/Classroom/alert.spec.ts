import {test} from "@playwright/test"

test("Alert handling", async({page})=>{


    page.once('dialog', alertType=>{
        const type = alertType.type()
        console.log(type)

        const message = alertType.message()
        console.log(message)

        alertType.accept()
    })

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.waitForTimeout(1000)

    await page.locator("//span[text()='Show']").nth(4).click()
    await page.waitForTimeout(1000)
})