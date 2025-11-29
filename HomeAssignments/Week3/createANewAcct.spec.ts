import { expect, test } from "@playwright/test"

test("Create a new account", async ({ page }) => {

    await page.goto("https://login.salesforce.com/")

    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password").fill("TestLeaf@2025")

    await page.locator("#Login").click()

    await page.getByTitle("Quarterly Performance").waitFor();

    const pageTitle = await page.title()
    console.log(pageTitle)
    const expectedPageTitle = "Home | Salesforce"

    expect.soft(pageTitle).toEqual(expectedPageTitle)

    const Url = page.url()
    const expectedUrl ="testleaf.lightning.force.com"

    expect.soft(Url).toContain(expectedUrl)

    await page.locator("//div[contains(@class,'appLauncher')]").click()

    //await page.getByText("View All").click()
    await page.locator("//button[text()='View All']").click();
    await page.getByPlaceholder("Search apps or items...").fill("Service")

    await page.locator("//mark[text()='Service']").first().click()
    await page.locator("a[title='Accounts']").click()

    await page.locator("//div[@title ='New']").waitFor()
    //await page.getByRole("link", {name:"New"}).click()
    await page.locator("//div[@title ='New']").click()
    //await page.getByLabel("Account Name").waitFor()
    await page.locator("//input[contains(@id,'input') and @name='Name']").fill("Testing")
    await page.locator("//button[text()='Save']").click()

    const toastmsg = await page.locator("//span[contains(@class,'toastMessage')]").textContent();
    console.log(toastmsg);

})