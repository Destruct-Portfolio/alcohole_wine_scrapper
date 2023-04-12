import fs from 'fs';
export default class PrivacyPassToken {
    static _path = '../assets/privacypass.token';
    /**
     * @description This will use the privacy pass generator to produce a new batch of tokens
     *
     * @internal
     */
    static _generate() {
        throw new Error('Not implemented yet.');
    }
    static getToken() {
        let tokens = JSON.parse(fs.readFileSync(this._path).toString());
        try {
            if (tokens.length === 0)
                PrivacyPassToken._generate();
        }
        catch (error) {
            /*      PrivacyPassToken._logger.error('Refill token file.') */
            console.log('Refill token file.');
        }
        const token = JSON.parse(tokens.shift());
        fs.unlinkSync(PrivacyPassToken._path);
        fs.writeFileSync(PrivacyPassToken._path, JSON.stringify(tokens, null, 2));
        return token;
    }
}
