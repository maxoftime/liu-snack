import nav from '../../components/presentationNav.js';
export default
 `
    <main class="demos">
        <h1>
            Framtidsspaningar
        </h1>
        
        <section class="demos future">
            
            <article>
                <section>
                    <h2>AI</h2>
                    <img src="/future/ai.png" alt=""/>
                    <p>
                        Både prediktiv och generativ AI kommer spela stora roller i samhället. 
                    </p>
                    <ul>
                        <li>Personliga assistenter</li>
                        <li>Förenkla automation i yrkeslivet</li>
                        <li>Realtidsanalyser</li>
                        <li>Medicin och sjukvård</li>
                    </ul>
                </section>
                <section class="masonry">
                </section>
            </article>

            <article>
                <section>
                    <h2>Internet of Senses</h2>
                    <img src="/future/ios.png" alt=""/>
                    <p>
                        Samlingsbegreppet IoS handlar om att våra alla våra sinnen ska involveras i våra interaktioner med teknik. 
                        Med hjälp av olika sensorer och wearables kan man sudda ut gränserna mellan människa och maskin.
                    </p>
                    <ul>
                        <li>VR/AR</li>
                        <li>Haptik</li>
                        <li>Lukt och smak</li>
                        <li>Neuroteknik</li>
                    </ul>
                </section>
                <section class="masonry"> 
                </section>
            </article>
            
            
            <article>
                <section>
                    <h2>3D everything</h2>
                    <img src="/future/food.png" alt=""/>
                    <p>
                        3D i alla dess former kommer garanterat leta sig in i fler och fler områden. Allt från digitala tvillingar inom industrin till underhållnings-"verses" till att 3D-printa matsvinn i finare mer ätbara former.
                    </p>
                </section>
                <section class="masonry"> 
                </section>
            </article>


            <article>
                <section>
                    <h2>Hållbarhet och integritet</h2>
                    
                    <img src="/future/integritet.png" alt=""/>
                    <p>
                        Vi kommer tröttna på att våra data och våra personliga uppgifter används och sprids i fel syften. Dessutom kommer vi bli mer granskande mot hur hållbara företag och lösningar är. 
                    </p>
                </section>
                <section class="masonry">
                </section>
            </article>




        </section>

        ${nav('/demos', '/tack')}
    </main>
`