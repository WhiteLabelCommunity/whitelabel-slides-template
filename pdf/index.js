const puppeteer = require('puppeteer');
const fs = require('fs')
const devices = require('puppeteer/DeviceDescriptors');
const merger = require('easy-pdf-merge');
console.log(`
SO.. LOOKS LIKE YOU WANT A
(   (     (
)\ ))\ )  )\ )
(()/(()/( (()/(
/(_))(_)) /(_))
(_))(_))_ (_))_|
| _ \|   \| |_|
|  _/| |) | __|
|_|  |___/|_|


    BY STEFANO ROSSO
    ok, wait a second, this could take a while
    oh, i forgot, you need to start gatsby on port 8000 if you want
    this fucking thing to work properly.
    And java. Yeah you heard well fucking java. In 2019.

    Cheers :D
 `);


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    var isOver = false;
    var pageNumber = 1;
    var files = [];
    while (!isOver) {
        console.log("Hold on, loading page " + pageNumber);

        await page.goto('http://localhost:8000/' + pageNumber, { waitUntil: 'networkidle2' });
        console.log("Page " + pageNumber + " loaded, trying to guess if this is a 404 page");
        var textContent = await page.evaluate(() => Array.from(document.querySelectorAll('h1'), element => element.textContent));
        isOver = textContent.includes('Gatsby.js development 404 page');

        if (!isOver) {

            console.log("Ok, it's not the final page, going to take some screenshots ;)");
            await page.pdf({ path: 'slide_' + pageNumber + '.pdf', width: '1920px', height: "1080px" });
            console.log("Wow some naked pictures, i'll keep them for myself.");
            files.push('slide_' + pageNumber + '.pdf');
        }
        pageNumber++;
    }

    console.log("Yep, it was the final page, now i'm going to bundle up all the screenshots in one big PDF, hold on!");
    await browser.close();

    await merger(files, 'slide_bundle.pdf', async (err) => {

        if (err)
            return console.log(err);

        files.map(file => {
            try {
                fs.unlinkSync('./' + file)
                //file removed
            } catch (err) {
                console.error(err)
            }
        });



    });


    console.log("Aaand done! you can find your PDF in this folder! Thanks for flying with us ;)");

})();
