import { generateQR } from '../../functions/generateQr.js';
import nav from '../../components/presentationNav.js';


const url = "https://talk.maxbergstrom.se/nyfiken";
const imgUrl = await generateQR(url);

export default
 `
        <main>
            <h1>
                Dags att interagera lite
            </h1>
            <p>
                Gå in på länken och fyll i det ni vill fylla i. 
                <br>
                Tre korta frågor, såklart helt anonymt. 
            </p>

            <section class="qanda-qr">
                <img class="qr" src="${imgUrl}" alt="Nyfiken på er">
                <a href="${url}">${url}</a>
            </section>

            ${nav('/om-xlent', '/resultat')}
        </main>
    `