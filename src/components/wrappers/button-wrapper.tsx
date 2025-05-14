import {onCleanup, onMount, ParentComponent} from "solid-js";
import styles from "~/components/perks/style.module.css";

const ButtonWrapper: ParentComponent<{
    enabled?: boolean;
    direction?: 'horizontal' | 'vertical';
    loop?: boolean;
    allowSlideNext?: boolean;
    allowSlidePrev?: boolean;
    allowTouchMove?: boolean;
    autoHeight?: boolean;
    effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards';
    class?: string;

}> = props => {
    let ref!: HTMLDivElement;
    const enabled = () => props.enabled ?? true;
    const direction = () => props.direction ?? 'horizontal';
    const loop = () => props.loop ?? false;
    const allowSlideNext = () => props.allowSlideNext ?? true;
    const allowSlidePrev = () => props.allowSlidePrev ?? true;
    const allowTouchMove = () => props.allowTouchMove ?? true;
    const autoHeight = () => props.autoHeight ?? false;
    const effect = () => props.effect ?? 'slide';

    const className = () => props.class ?? '';

    const buttons: NodeListOf<HTMLElement> = document.querySelectorAll(".button");

    onMount(() => {


        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", (e: Event) => {
                console.log(buttons[i]);
                buttons[i].classList.add(styles["selected"]);
                buttons[i].classList.remove(styles["cardItem"]);

                const close: HTMLElement | null = buttons[i].querySelector(".close");
                if (close) {
                    close.style.display = "flex";

                    close.addEventListener("click", () => {
                        setTimeout(() => {
                            buttons[i].classList.remove(styles["selected"]);
                            buttons[i].classList.add(styles["cardItem"]);
                            close.style.display = "none";
                        }, 10);
                    }, { once: true });
                }
            });
        }
        onCleanup(() => {

        })
    })

    return (
        <div ref={ref} class={`${className()}`}>

            {props.children}

        </div>
    );
};

export default ButtonWrapper;