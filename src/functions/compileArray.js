import fs from 'fs';

export default (name) => {
    const list = fs.readFileSync(`./src/dbs/${name}.txt`, 'utf8').split('\n');
    return list;
}