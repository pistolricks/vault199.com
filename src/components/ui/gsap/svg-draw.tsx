import {Component, createEffect, createSignal, JSX, onCleanup} from "solid-js";
import {gsap} from "gsap";

import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";



type PROPS = {
    width?: string,
    height?: string,
    class?: string;
    children?: JSX.Element[] | JSX.Element;
}

const SvgDraw: Component<PROPS> = (props) => {


    let ref!: SVGSVGElement;

    const children = () => props.children;



    const setAnimation = () => {
        // https://greensock.com/docs/v3/Plugins/DrawSVGPlugin
        //draws all elements with the "draw-me" class applied with staggered start times 0.1 seconds apart
        gsap.from(".draw", {
            duration: 20,
            stagger: 0.1,
            drawSVG: 20,
        });
    }


    createEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
        setAnimation()

    })

    const className = () => props.class;
    const width = () => props.width ?? '100%';
    const height = () => props.height ?? '100%';

    return (
        <>

            <svg
                ref={ref}
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px"
                class={`fill-transparent ${className()}`}
                viewBox="0 0 575.43 720" width={width()} height={height()}>

                {children()}

            </svg>

        </>
    );
}

export default SvgDraw;