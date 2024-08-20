import fs from 'fs';

export default (name, content) => {
    const writeStream = fs.createWriteStream(`./src/dbs/${name}.txt`, {flags: 'a'});
    writeStream.write(`${content}\n`);
    writeStream.on('finish', () => { console.log(`Ok`); });
    writeStream.on('error', (err) => { console.error(err) });
    writeStream.end();
}