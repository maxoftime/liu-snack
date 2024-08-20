import nav from '../components/presentationNav.js';

export default
 `
    <main>
        <h1>
            Hej och välkomna!
        </h1>

        <p>
            <ul>
                <li>Vem är jag och vad gör jag här?</li>
                <li>Vilka är XLENT och vad gör vi?</li>
                <li>Lite inspiration och demos</li>
                <li>Framtidsspaningar</li>
                <li>Frågestund</li>
            </ul>
        </p>
        ${nav('#', 'intro')}
    </main>
`