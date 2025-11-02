import {expect, test} from "@playwright/test"

test("Create A Lead", async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")

await page.locator("//input[@id='username']").fill("Demosalesmanager")
await page.locator("//input[@id='password']").fill("crmsfa")
await page.locator(".decorativeSubmit").click()

await page.locator("//a[contains(text(), 'CRM/SFA')]").click()

await page.locator("//a[text()='Leads']").click()

await page.locator("//a[text()='Create Lead']").click()

await page.locator("//input[contains(@id, 'companyName')]").fill("TestLeaf")

await page.locator("//input[contains(@id, 'firstName')]").first().fill("Hemavathi")

await page.locator("//input[contains(@id, 'lastName')]").first().fill("Veeramani")

await page.locator("//input[contains(@id, 'personalTitle')]").fill("Mrs")
await page.locator("//input[contains(@id, 'generalProfTitle')]").fill("Madam")
await page.locator("//input[contains(@id, 'annualRevenue')]").fill("40000")
await page.locator("//input[contains(@id, 'departmentName')]").fill("QA")
await page.locator("//input[contains(@id, 'primaryPhoneNumber')]").fill("09767545789")


await page.locator(".smallSubmit").click()

await expect.soft(page.locator("//span[contains(@id,'companyName')]")).toContainText("TestLeaf")
await expect(page.locator("//span[contains(@id,'firstName_sp')]")).toHaveText("Hemavathi")
await expect.soft(page.locator("//span[contains(@id,'lastName_sp')]")).toHaveText("Veeramani")

})