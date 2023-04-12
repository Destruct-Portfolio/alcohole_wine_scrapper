import fs from "node:fs";
let Data = JSON.parse(fs.readFileSync('../output/product.json').toString());
let config = JSON.parse(fs.readFileSync('../config.json').toString());
export default class MSSQL {
    sql;
    config;
    constructor(config) {
        this.config = config;
        this.sql = require('mssql');
    }
    async insertData(tableName, data) {
        try {
            await this.sql.connect(this.config);
            let columns = Object.keys(data[0]);
            let columnString = columns.join(', ');
            let valueString = '@' + columns[0];
            for (let i = 1; i < columns.length; i++) {
                valueString += ', @' + columns[i];
            }
            let request = new this.sql.Request();
            data.forEach((row) => {
                columns.forEach(col => {
                    request.input(col, this.sql.VarChar, row[col]);
                });
                request.query(`INSERT INTO ${tableName} (${columnString}) VALUES (${valueString})`);
            });
            console.log("Data inserted successfully!");
        }
        catch (err) {
            console.log(err);
        }
    }
}
console.log(new MSSQL(config).insertData("Table_Name", Data));
