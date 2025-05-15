import { cn } from "~/lib/utils";
import {
	type Component,
	type JSX,
	createEffect,
	mergeProps,
	onCleanup,
	splitProps,
} from "solid-js";

export interface NoSignalScreenProps
	extends JSX.CanvasHTMLAttributes<HTMLCanvasElement> {
	frameRate?: number;
}

export const NoSignalScreen: Component<NoSignalScreenProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, ["frameRate", "class"]);
	const localProps = mergeProps({ frameRate: 30 }, _localProps);
	let canvasRef!: HTMLCanvasElement;

	createEffect(() => {
		const canvas = canvasRef;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		let animationFrameId: number;
		let lastTime = 0;
		const interval = 1000 / localProps.frameRate;

		const drawNoise = (currentTime: number) => {
			animationFrameId = requestAnimationFrame(drawNoise);

			if (currentTime - lastTime < interval) return;
			lastTime = currentTime;

			const imageData = ctx.createImageData(canvas.width, canvas.height);
			const data = imageData.data;

			for (let i = 0; i < data.length; i += 4) {
				const value = Math.floor(Math.random() * 256);
				data[i] = value; // red
				data[i + 1] = value; // green
				data[i + 2] = value; // blue
				data[i + 3] = 255; // alpha
			}

			ctx.putImageData(imageData, 0, 0);
		};

		animationFrameId = requestAnimationFrame(drawNoise);

		onCleanup(() => {
			window.removeEventListener("resize", resizeCanvas);
			cancelAnimationFrame(animationFrameId);
		});
	});

	return (
		<canvas
			ref={canvasRef}
			class={cn(
				"pointer-events-none opacity-50 absolute inset-0 size-full",
				localProps.class,
			)}
			{...forwardProps}
		/>
	);
};
