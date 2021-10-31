const puppeteer = require("puppeteer");
const { Keyboard } = require("puppeteer/lib/cjs/puppeteer/common/Input");

var url = "http://patientconnect.bu.edu/";

async function patientconnect(url) {

    const browser = await puppeteer.launch(  { headless: false}  );
    const page = await browser.newPage();

    page.goto(url);
    await page.waitForNavigation();

    await page.waitForTimeout(1000);
    await page.type('#j_username', '', {delay: 10}); #username
    await page.type('#j_password', '', {delay: 10}); #password
    await page.click("button.input-submit");
    await page.waitForNavigation();

    await page.click("a.btn.btn-sm.btn-primary");
    // await page.waitForNavigation();

    // await page.waitForTimeout(500);
    await page.waitForSelector("a.btn.btn-lg.btn-success");
    await page.click("a.btn.btn-lg.btn-success");
    // await page.waitForNavigation();

    await page.waitForSelector("div.answer.button.p-3");


    await page.evaluate ( () => {

        // Array.from(document.querySelectorAll("div.answer.button.p-3"))

        let no_buttons = document.querySelectorAll("div.answer.button.p-3");
        for (let button of no_buttons) {

            button.click();
    
        }

    });



    

    



}






patientconnect(url);


















