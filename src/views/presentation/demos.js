import nav from '../../components/presentationNav.js';
import { generateQR } from '../../functions/generateQr.js';

const wildQr = await generateQR('https://dva.8thwall.app/future-city/?id=wild');
const walkableQr = await generateQR('https://dva.8thwall.app/future-city/?id=walkable');

export default
 `
    <main class="demos">
        <h1>
            Inspiration och demos
        </h1>
        
        <section class="demos">
            
            <article>
                <section>
                    <h2>NeRF & Gaussian splats</h2>
                    <p>
                        Neural Radiance Fields (NeRFs) och Gaussian Splatting är två sätt att konstruera 3D-scener utifrån från 2D-bildsekvenser.
                    </p>
                </section>
                <section class="masonry"> 
                    <iframe src="https://lumalabs.ai/embed/4b2a92dc-983f-433e-aa43-f89db0ea5917?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="672" height="500" frameborder="0" title="luma embed" style="border: none;"></iframe>
                   
                    <iframe src="https://lumalabs.ai/embed/6ead3754-8429-4dae-b744-272e3006143d?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="280" height="500" frameborder="0" title="luma embed" style="border: none;"></iframe>
                  
                </section>
            </article>

            <article>
                <section>
                    <h2>Hello there - Rörelsstyrd entréskylt på en reklambyrå</h2>
                    <p>
                        
                    </p>
                </section>
                <section class="masonry">
                    <iframe src="/demos/familjen-hello/" height="666" style="border: none;"></iframe>
                </section>
            </article>

            <article>
                <section>
                    <h2>Doly - DIY Robotassistent</h2>
                    <p>
                        
                    </p>
                </section>
                <section class="masonry">
                    <iframe height="666" src="https://www.youtube.com/embed/5U-bSZRx-t4?si=w55Qo99HL5xgB0_H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
            </article>

            <article>
                <section>
                    <h2>Lucas Rizotto - "Full time mad scientist"</h2>
                    <p>
                        Bygger 
                    </p>
                </section>
                <section class="masonry">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/C1G5b_2PYj0?si=N6CdyII2AUfB9XrV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aHyNYfFfXlg?si=yHr58Uv81s0pQE8k&amp;start=1340" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/R2KZ34OZlwk?si=R4oSf6vuxZEDhcFH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
            </article>


        </section>

        ${nav('/resultat', '/framtiden')}
    </main>
`