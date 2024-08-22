import nav from '../../components/presentationNav.js';
export default
 `
    <main class="intro">
        <h1>
            Vem är jag då?
        </h1>

        <section class="intro">
            <h2>Privat</h2>
            <ul>
                <li>Max Bergström</li>
                <li>33 år</li>
                <li>Sambo och två barn</li>
                <li>Fotboll</li>
                <li>Konsult på XLENT</li>
            </ul>
        </section>

        <section class="intro">
            <h2>Roller</h2>
            <ul>
                <li>Digital producent</li>
                <li>Arbetsledare</li>
                <li>Avdelningschef</li>
                <li>Systemutvecklare</li>
                <li>Frontendutvecklare</li>
                <li>Creative Developer</li>
            </ul>
        </section>

        <section class="intro">
            <h2>Arbetsgivare</h2>
            <ul>
                <li>NTM</li>
                <li>Familjen</li>
                <li>DVA Creative Technology Studio</li>
                <li>XLENT</li>
            </ul>
        </section>

        ${nav('/', '/om-xlent')}
    </main>
`