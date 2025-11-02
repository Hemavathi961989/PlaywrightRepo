import {expect, test} from "@playwright/test"

test("Edit A Lead", async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")

await page.locator("//input[@id='username']").fill("Demosalesmanager")
await page.locator("//input[@id='password']").fill("crmsfa")
await page.locator(".decorativeSubmit").click()

await page.locator("//a[contains(text(), 'CRM/SFA')]").click()

await page.locator("//a[text()='Leads']").click()

await page.locator("//a[text()='Find Leads']").click()

await page.locator("//input[@name='firstName']").last().fill("Vineeth")
await page.getByRole("button",{name:"Find Leads"}).click()

await page.locator("(//div[contains(@class,'partyId')]/a)[2]").click();

await page.locator("//a[text()='Edit']").click()

await page.locator("//input[contains(@id,'companyName')]").fill("Test-Leaf")
await page.locator("//input[contains(@id,'annualRevenue')]").fill("120000")
await page.locator("//input[contains(@id,'departmentName')]").fill("Process")
await page.locator("//textarea[contains(@id,'description')]").fill("This is a test msg")

await page.locator("//input[@value='Update']").click()

await expect(page.locator("//span[contains(@id,'companyName')]")).toContainText("Test-Leaf")
await expect.soft(page.locator("//span[contains(@id,'annualRevenue')]")).toHaveText("$120,000.00")
await expect(page.locator("//span[contains(@id,'departmentName')]")).toHaveText("Process")

})