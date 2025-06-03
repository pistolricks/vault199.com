import {Component} from "solid-js";

type PROPS = {
    class?: string
}

const PowerIcon: Component<PROPS> = props => {
    const className = () => props.class ?? "stroke-1 size-10";
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
             class={className()}
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
        </svg>
    );
};

export default PowerIcon;
