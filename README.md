# Alcohole Scraper

## Description
a webscraper that scrapes wine products that from 3 defrent websites and exports everything into a csv file. this project will gives you a long list of articles following the same format product_name, product_url, product_price, product_image. 
the websites are protected by cloudflare protection but we were able to bypass it easly using few packages we use and love.

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

you will see in the terminal each link being scraped in this manner because we need to keep track

FYI :: the [0] will +1 each time it finishes 100 Link
<4/8/2023, 9:33:37 AM> [0] INFO : Navigating to https://shopredspirits.com/shop?product-id=5d8acf1bdb6f99791401e8d6&option-id=5ca1e077b09e26139a354a0d935bcb0335b6ada7425b439e75cf3c52b38cbabb
