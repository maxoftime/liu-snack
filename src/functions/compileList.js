import fs from 'fs';

export default
 (name) => {
    const list = fs.readFileSync(`./src/dbs/${name}.txt`, 'utf8').split('\n');
    let body = ``;
    for (let i = 0; i < list.length; i++) {
        if (list[i] != '') {
            //separate in two variables by this character °
            const content = list[i].split('°');
            body += `
                <section class="bubble">
                    <span class="chatMsg">${content[1]}</span>
                    <span class="sender">${content[0]}</span>
                </section>`;
        }
    }
    return body;
}