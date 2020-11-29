const puppeteer = require('puppeteer-core')
const http = require('http')




getCarbonImage = async (code) => {
  console.log(code)
  const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser', headless: true,
   args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(`https://carbon.now.sh/?theme=hopscotch&code=${code}`);

  const export_menu = await page.$('#export-menu')
  await export_menu.click()
  const [four_x_button] = await page.$x("//button[contains(., '4x')]")
  if(four_x_button){
    await four_x_button.click()
  }
  const [open_button] = await page.$x("//button[contains(., 'Open')]")
  if(open_button){
    await open_button.click()
  }
  await page.waitForNavigation({'waitUntil': 'networkidle0'});
  await page.screenshot({path: 'carbon.png'});

  await browser.close();
  console.log('done!')
}


const requestListener = async (req, res) => {
  const code = req.url.split('=')[1]
  if(code){
    await getCarbonImage(code)
    res.end('Image generated');
    res.writeHead(200);
  } else {
  res.writeHead(200);
    res.end('No code given or bad input')
  }

}

const server = http.createServer(requestListener);
server.listen(8080);

