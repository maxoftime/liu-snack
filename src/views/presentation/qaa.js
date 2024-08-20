import nav from '../../components/presentationNav.js';
import { generateQR } from '../../functions/generateQr.js';
const url = "/chat";
const qrUrl = await generateQR(url);

export default
 `
    <main>
        <h1>
           Q&A
        </h1>

        <section class="qanda">
            <img class="" src="${qrUrl}" alt="QR-kod"/>
            <section id="chat">
                <section class="bubble">
                    <span class="chatMsg">Hello</span>
                    <span class="sender">World!</span>
                </section>
                <section id="typeindicator" style="opacity: 0;">
                    <img src="/img/chat.gif" alt="chat indicator"/>
                </section>
            </section> 
        </section>

        ${nav('/', '/tack')}
    </main>


    <script src="/socket.io/socket.io.js"></script>
        <script>
            const socket = io();
            const messagesList = document.getElementById('chat');
            const typeIndicator = document.getElementById('typeindicator');
            socket.on('newMessage', (message) => {
                const bubble = document.createElement("section");
                bubble.classList.add("bubble");
                let content = ''
                content += '<span class="chatMsg">' + message.chat + '</span>';
                content += '<span class="sender">' + message.name + '</span>';
                bubble.insertAdjacentHTML('beforeend', content);
                messagesList.insertAdjacentElement('beforeend', bubble);
                messagesList.scrollTo(0, messagesList.scrollHeight);
            });

            let hide;
            socket.on('typing', (message) => {
                clearTimeout(hide);
                typeIndicator.style.opacity = 1;
                hide = setTimeout(() => {
                    typeIndicator.style.opacity = 0;
                    console.log('clear');
                }, 500);
            })

            
    </script>
`