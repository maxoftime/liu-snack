import nav from '../../components/presentationNav.js';
export default
 `
    <main>
        <h1 class="large-no-wrap">
            Vilka är <span style="white-space: nowrap;"><img style="display: inline; max-height: 0.7em;" src="/img/xlent-white.svg" alt="XLENT" />?</span>
        </h1>

        <p>
            På XLENT är vi mer än bara en organisation av skickliga konsulter.
            För oss är vår kultur och människorna som skapar den, vår absolut viktigaste tillgång och konkurrensfördel.
            Tillsammans gör vi skillnad!
        </p>

        <p>
            Vi är övertygade om att smarta digitala lösningar kan och bör driva verklig affärsnytta, omforma affärsmöjligheter och skapa konkurrensfördelar. 
            För våra kunder är vi bryggan mellan teknikens potential och affärens behov, alltid med målet att överträffa förväntningarna.
             Vi tror på långsiktiga relationer och finns här för att stötta er och tillsammans skapa gemensam framgång.
        </p>

        ${nav('/intro', '/hallbara-konsulter')}
    </main>
`