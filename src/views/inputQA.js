export default
 `
    <main>
        <h1>Frågor, kommentarer och annat kul</h1>
        <form action="/chat" method="post">
            <label for="name">Namn (frivilligt)</label>
            <input autofocus type="text" name="name" id="name">
            
            <label for="chat">Fråga</label>
            <input type="text" name="chat" id="chatbox">

            <input type="submit" id="submit" value="Skicka">
        </form>
    </main>

    <script>
        const chatbox = document.getElementById('chatbox');
        chatbox.addEventListener('input', ()=> {
            fetch('/chat', {
                method: 'POST',
                body: new URLSearchParams({
                    typing: true
                })
            })
        })
    </script>
`