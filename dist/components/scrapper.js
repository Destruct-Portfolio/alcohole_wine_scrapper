import Hero from '@ulixee/hero';
import Server from '@ulixee/server';
import { getRedemptionHeader } from "privacy-pass-redeemer";
import PrivacyPassToken from '../misc/token.js';
export default class Hero_Scrapper {
    static HERO_PORT = 6450;
    $payload;
    $client;
    _server;
    constructor() {
        this._server = null;
        this.$client = null;
        this.$payload = [];
    }
    async $bypass(url) {
        let token = PrivacyPassToken.getToken();
        console.log("[+] Attempting To bypass captcha ....");
        await this.$client.goto(url);
        await this.$client.fetch(url, {
            headers: getRedemptionHeader(token, url, "GET"),
        });
    }
    async $setup() {
        this._server = new Server();
        await this._server.listen({
            port: Hero_Scrapper.HERO_PORT
        });
        this.$client = new Hero({
            connectionToCore: {
                host: `ws://localhost:${Hero_Scrapper.HERO_PORT}`
            }, viewport: {
                height: 2000,
                width: 1200
            }
        });
    }
    async $extract() { }
    async $cleanup() {
        if (this.$client && this._server) {
            await this.$client.close();
            await this._server.close();
        }
    }
    async $restart(url) {
        await this.$cleanup();
        await this.$setup();
        await this.$bypass(url);
    }
    async exec() {
        await this.$setup();
        await this.$extract();
        await this.$cleanup();
        return this.$payload;
    }
}
