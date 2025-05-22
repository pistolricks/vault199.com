import { animate, inView } from "motion";
import {
    type Component,
    type JSX,
    mergeProps,
    onMount, Setter,
    splitProps,
} from "solid-js";

export interface NumberTickerProps extends JSX.HTMLAttributes<HTMLSpanElement> {
    value?: number;
    direction?: "up" | "down";
    delay?: number;
    decimalPlaces?: number;
    setValue?: Setter<number>;
    type?: "decay" | "spring" | "keyframes" | "tween" | "inertia";
}

export const NumberTicker: Component<NumberTickerProps> = (props) => {
    const [_localProps, forwardProps] = splitProps(props, [
        "value",
        "direction",
        "delay",
        "decimalPlaces",
        "type"
    ]);
    const localProps = mergeProps(
        { value: 100, direction: "up" as const, delay: 0, decimalPlaces: 0, type: "spring" },
        _localProps,
    );

    const type = () => localProps.type ?? "spring";

    let ref!: HTMLSpanElement;

    onMount(() => {
        inView(ref, () => {
            animate(0, 1, {
                delay: localProps.delay,
                type: type(),
                damping: 65,
                stiffness: 100,
                onUpdate: (progress) => {
                    let latest = progress * localProps.value;
                    if (localProps.direction === "down") {
                        latest = localProps.value - latest;
                        props.setValue(latest);
                    }
                    ref.textContent = Intl.NumberFormat("en-US", {
                        minimumFractionDigits: localProps.decimalPlaces,
                        maximumFractionDigits: localProps.decimalPlaces,
                    }).format(Number(latest.toFixed(localProps.decimalPlaces)));
                    props.setValue(Number(ref.textContent));
                },
            });
        });
    });

    return <span {...forwardProps} ref={ref} />;
};

const BaseNumberTicker: Component<NumberTickerProps> = props => {

    return (
        <NumberTicker {...props} />
    );
};

export {BaseNumberTicker}