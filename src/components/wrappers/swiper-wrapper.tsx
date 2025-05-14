import {onCleanup, onMount, ParentComponent} from "solid-js";
import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SwiperWrapper: ParentComponent<{
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


    onMount(() => {
        const swiper = new Swiper(ref, {
            enabled: enabled(),
            // Optional parameters
            direction: direction(),
            loop: loop(),
            allowSlideNext: allowSlideNext(),
            allowSlidePrev: allowSlidePrev(),
            allowTouchMove: allowTouchMove(),
            autoHeight: autoHeight(),
            effect: effect(),

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
        onCleanup(() => {
           swiper.destroy()
        })
    })

    return (
        <div ref={ref} class={`swiper cursor-grab ${className()}`}>
            <div class={"swiper-wrapper"}>
            {props.children}
            </div>
        </div>
    );
};

export default SwiperWrapper;