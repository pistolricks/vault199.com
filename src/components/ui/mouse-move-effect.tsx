import {createEffect} from "solid-js";


const MouseMoveEffect = ({
                             factorX = 0.5,
                             factorY = 0.5,
                             maxDegree = 90,
                             children,
                         }) => {
    let ref!: HTMLDivElement;

    const eventListener = (event) => {
        // console.log("We moving!");
        const mouseX = event.pageX / window.innerWidth;
        const mouseY = event.pageY / window.innerHeight;
        const ydeg = mouseX * maxDegree - factorX * maxDegree;
        const xdeg = -factorY * (mouseY * maxDegree - factorY * maxDegree);
        ref.style.transitionDelay = "0ms";
        ref.style.transform = `rotateY(${ydeg}deg) rotateX(${xdeg}deg)`;
    };

    const reset = () => {
        ref.style.transitionDelay = "300ms";
        ref.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    createEffect(() => {
        return () => {
            removeEventListener("mousemove", eventListener);
        };
    }, []);

    return (
        <div
            ref={ref}
            onMouseMove={eventListener}
            onMouseLeave={reset}
            style={{
                perspective: '1000',
                'transform-style': "preserve-3d",
                transform: `rotateY(0deg) rotateX(0)`,
                'transition-property': "transform",
            }}
        >
            {children}
        </div>
    );
};

export default MouseMoveEffect;
