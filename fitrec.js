const puppeteer = require("puppeteer");
const { Keyboard } = require("puppeteer/lib/cjs/puppeteer/common/Input");


var time_slot;
var dayToReg = "12/12/2020";
var url = "https://myfitrec.bu.edu/wbwsc/webtrac.wsc/search.html?keyword=center&module=ar";



async function locateElements(url) {

    const browser = await puppeteer.launch(  { headless: false}  );
    const page = await browser.newPage();

    await page.goto(url);

    var days = await page.evaluate( () => 
    
        Array.from(document.querySelectorAll("a.button.processed")).map( element => {
            
            if (element.innerHTML == "Go to calendar") {

                return element.href; 

            }
        }
            )
        
        
        ); 
        
    //.map( text => text.innerText.trim()));
         
    var link = days.filter( (link) => link != null)[2];

    // console.log(days);
    
    
    await page.goto(link);

    
    
    var days = await page.evaluate( () => 
    
        Array.from(document.querySelectorAll("a.block.button.multi-select.block-status.success.processed")).map( element => {
            
            if (element.href.includes("12/09/2020")) {

                return element;

                }
            }
        )
        ); 
       
    var day = days.filter( (href) => href != null)[0];
    
        
    await page.click("a[href*='12/12/2020']"); 
    
    // await page.goBack();

    await page.waitForTimeout(1000);
    await page.click("a#websearch_multiselect_buttonaddtocart");
    // await page.waitForNavigation();
    
    await page.waitForTimeout(300);
    var loginTOBU = await page.evaluate( () => 
            document.querySelector("div#login-sso a").href
    );
        
    page.goto(loginTOBU);
    await page.waitForNavigation();
       
    // await page.waitForTimeout(300);
    
    await page.type('#j_username', '----', {delay: 10}); #hiding my username
    await page.type('#j_password', '----', {delay: 10}); #hiding my password
    await page.click("button.input-submit");
    await page.waitForNavigation();

    await page.waitForTimeout(1000);
    await page.click("input#processingprompts_waivercheckbox");
    await page.click("input#processingprompts_buttoncontinue");
    await page.waitForNavigation();

    await page.click("a#webcart_buttoncheckout");
    // await page.waitForNavigation();

    
    await page.waitForSelector("input#webcheckout_buttoncontinue")
    await page.click("input#webcheckout_buttoncontinue");
    // await page.click("span.btn-text");
    await page.waitForNavigation();

    await page.waitForTimeout(1000);
    await page.click("#webconfirmation_buttonsumbit");
    
    await page.waitForNavigation();
    

    
    
}

locateElements(url); 
