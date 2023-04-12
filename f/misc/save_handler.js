import fs from "node:fs";
export default class SaveHandler {
    static To_JSON(Data) {
        console.log(`[+] Saving to json file ...`);
        try {
            let t = JSON.parse(fs.readFileSync('../output/products.json').toString());
            Data.forEach((item) => t.push(item));
            fs.writeFileSync('../output/products.json', JSON.stringify(t));
            console.log(`[+] Saving Succsefull...`);
        }
        catch (error) {
            console.log(`[-] saving Failed ...`);
            console.log(error);
        }
    }
}
