export default (previous, next) => {
    let body = `
        <nav aria-label="Presentation">
            <a id="previous-arrow" class="icon previous" href="${previous}">
                
            </a>
            <a id="next-arrow"class="icon" href="${next}">
                    
            </a>
        </nav>

        <script>
            const next = document.getElementById("next-arrow");
            const previous = document.getElementById("previous-arrow");

            document.addEventListener("keydown", (event) => {
                if (event.code === 'ArrowRight') {
                    next.click();
                }
                if (event.code === 'ArrowLeft') {
                    previous.click();
                }
            });
        </script>
    `;
    return body;
}