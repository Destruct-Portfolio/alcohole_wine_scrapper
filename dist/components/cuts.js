import Hero_Scrapper from "./scrapper.js";
import fs from "node:fs";
import Sleep from "../misc/sleep.js";
import Logger from "../misc/logger.js";
export default class Cuts extends Hero_Scrapper {
    source;
    #Logger;
    constructor(source) {
        super();
        this.source = source;
        this.#Logger = new Logger("Link_Collector", '1');
    }
    async $extract() {
        this.#Logger.info('Checking to see if Browser Is Ready');
        if (!this.$client)
            return;
        this.#Logger.info('Browser Ready Navigating To :: ' + this.source);
        await this.$bypass("https://shopredspirits.com/");
        await this.$client.goto(this.source, { timeoutMs: 0 });
        await this.$client.waitForLoad('AllContentLoaded');
        await Sleep.For(5);
        fs.writeFileSync('defe.jpeg', await this.$client.takeScreenshot());
        let NextPage = true;
        let numberOfElements = 0;
        while (NextPage) {
            try {
                this.#Logger.info(`${await this.$client.url}`);
                let Links = await this.$client.querySelectorAll('div.item-wrapper.product').$map((async (t) => {
                    return await t.querySelector('a').href;
                }));
                const Product_Id = Links.map((item) => {
                    return item.split('-id=')[1].split('&')[0];
                });
                console.table(Product_Id);
                fs.appendFileSync('../assets/Link.txt', Links.join(`\n`));
                if (Links.length > 0) {
                    numberOfElements = numberOfElements + 18;
                    await this.$client.goto(`${this.source}&skip=${numberOfElements}`, { timeoutMs: 0 });
                    await this.$client.waitForLoad('AllContentLoaded');
                }
                else {
                    NextPage = false;
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    this.#Logger.error(`Failed !!! ${error.message}`);
                    NextPage = false;
                }
            }
        }
        return;
    }
}
