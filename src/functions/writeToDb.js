import fs from 'fs';
import path from 'path';
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (name, content) => {
    const writeStream = fs.createWriteStream(`${__dirname}/dbs/${name}.txt`, {flags: 'a'});
    writeStream.write(`${content}\n`);
    writeStream.on('finish', () => { console.log(`Ok`); });
    writeStream.on('error', (err) => { console.error(err) });
    writeStream.end();
}