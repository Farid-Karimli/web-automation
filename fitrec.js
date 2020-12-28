const puppeteer = require("puppeteer");

const browser = await puppeteer.launch();


url = "https://myfitrec.bu.edu/wbwsc/webtrac.wsc/search.html?keyword=center&module=ar";



async function locateElements(url) {

    const page = await browser.newPage();

    await page.goto(url);

    const calendar_buttons = await page.evaluate( () => 
    
        Array.from((document.querySelectorAll("a.button.processed")).map( text => text.innerText.trim())
        
        )
        ) ;

    //for (let i = 0; i < buttons.length; i++) {
            
           // if (buttons[i].innerHTML  = "Go to calendar") {
             //   console.log(buttons[i]);
             //   break;
          //  }

    // }

    console.log(buttons[2]);
    browser.close();

}
