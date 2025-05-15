import {
	type Component,
	createEffect,
	createSignal,
	mergeProps,
	onCleanup,
} from "solid-js";

export interface TypingAnimationProps {
	text: string;
	duration?: number;
}

export const TypingAnimation: Component<TypingAnimationProps> = (props) => {
	const localProps = mergeProps({ duration: props.duration ?? 200 }, props);
	const [displayedText, setDisplayedText] = createSignal<string>("");
	const [i, setI] = createSignal<number>(0);

	createEffect(() => {
		const typingEffect = setInterval(() => {
			if (i() < localProps.text.length) {
				setDisplayedText(localProps.text.substring(0, i() + 1));
				setI((i) => i + 1);
			} else {
				clearInterval(typingEffect);
			}
		}, localProps.duration);

		onCleanup(() => {
			clearInterval(typingEffect);
		});
	});

	return <>{displayedText()}</>;
};

const TypingAnimationComponent: Component<{
	class?: string;
	text: string;
	duration?: number;
}> = (props) => {

	const className = () => props.class ?? 'text-2xl font-bold';
	const text = () => props.text;

	return (
		<h1 class={className()}>
			<TypingAnimation text={text()} duration={props.duration} />
		</h1>
	);
}

export {TypingAnimationComponent}