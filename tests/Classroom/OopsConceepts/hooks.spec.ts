import {test} from '@playwright/test'

test.beforeAll("Read Value From Json",()=>{
    console.log("Read From Json File")
})

test.beforeEach("use Storage State", ()=>{
console.log("Use Storage State")
})

test.afterEach("Take Screenshot",()=>{
    console.log("Take Screenshot After Each Test")
})

test.afterAll("close DB Connection",()=>{
    console.log("Close DB Connection")
})

test("Login page",()=>{
    console.log("Login Page")
})

test("Create Lead",()=>{
    console.log("Create Lead")
})