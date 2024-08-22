import nav from '../../components/presentationNav.js';

export default
 `
    <main>
        <h1>En hälsning från ChatGPT</h1>
  
        <section id="chatresult">
        </section>
        
        ${nav('/nyfiken-qr', '/framtiden')}
    </main>
    <script>
          const eventSource = new EventSource('/stream');
          const resultElement = document.getElementById('chatresult');

          eventSource.onmessage = function(event) {
            resultElement.innerHTML += event.data;
          };

          eventSource.addEventListener('end', function(event) {
            eventSource.close();
          });
    </script>
`