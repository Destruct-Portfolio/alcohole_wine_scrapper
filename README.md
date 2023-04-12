# Alcohole Scraper

a scraper to scrape 3 links to and save into JSON and MSSQL DB

## Description

as we have said before in order to pass the captcha we had to use an other way than the 2captchakey so we have use privacy pass
and an npm package called privacy pass redeemer
we have supplied you with 90 tokens allready and in order to get those tokens we will provide you with a video on how easly
get them.

### Installing

- npm install
- Please make sure to load the .env file with the needed data to connect to your DB

### Executing program

- How to run the program
  `npm start`

### more information

The bot is divided into two parts, and its behavior depends on whether there are links in the assets/Link file. If there are links in that text file, the bot will start scraping for products. If the file is empty, the bot will begin the second part of its operation, which involves gathering links to put them in the assets/Link file.

If you need to stop the bot at any point, you can do so without worry. When you start it again, it will resume from where it left off.

To change the links, use the config.json file. You can modify the links inside the array to any product on the website, and the bot will still function correctly.

The tokens are divided by 100 to avoid potential issues with Cloudflare.

Finally, if you encounter an error, it may be due to a version issue. Be sure to run the script with Node v18.15.0, or else you risk breaking the application due to a library compatibility issue.

you will see in the terminal each link being scraped in this manner because we need to keep track

FYI :: the [0] will +1 each time it finishes 100 Link
<4/8/2023, 9:33:37 AM> [0] INFO : Navigating to https://shopredspirits.com/shop?product-id=5d8acf1bdb6f99791401e8d6&option-id=5ca1e077b09e26139a354a0d935bcb0335b6ada7425b439e75cf3c52b38cbabb
