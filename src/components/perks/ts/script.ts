const buttons: NodeListOf<HTMLElement> = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e: Event) => {
        console.log(buttons[i]);
        buttons[i].classList.add("selected");
        buttons[i].classList.remove("cardItem");

        const close: HTMLElement | null = buttons[i].querySelector(".close");
        if (close) {
            close.style.display = "flex";

            close.addEventListener("click", () => {
                setTimeout(() => {
                    buttons[i].classList.remove("selected");
                    buttons[i].classList.add("cardItem");
                    close.style.display = "none";
                }, 10);
            }, { once: true });
        }
    });
}

let darkModeTriggered: boolean = false;
function darkMode(): void {
    darkModeTriggered = !darkModeTriggered;
    const root = document.querySelector(":root") as HTMLElement;
    if (darkModeTriggered) {
        root.style.setProperty("--bg-color", "rgb(8, 41, 59)");
        root.style.setProperty("--header-color", "rgba(255, 255, 0, 0.692)");
    } else {
        root.style.setProperty("--bg-color", "rgb(33, 117, 161)");
        root.style.setProperty("--header-color", "rgb(255, 255, 0)");
    }
}