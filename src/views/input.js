export default
 `
    <main>
        <h1>Anonymt och GDPR-säkrat</h1>
        <form action="/tack" method="post">
            <label for="city">Tidigare ort</label>
            <input autofocus type="text" name="city" id="city">
            
            <label for="age">Ålder</label>
            <input type="number" name="age" id="age">

            <label for="fun">Främsta intresse</label>
            <input type="text" name="fun" id="fun">

            <input type="submit" id="submit" value="Svara">
        </form>
    </main>
`