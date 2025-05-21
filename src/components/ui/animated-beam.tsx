import { cn } from "~/lib/utils";
import { animate } from "motion";
import {
	type Component,
	createEffect,
	createSignal,
	createUniqueId,
	mergeProps,
	onCleanup,
	onMount, ParentComponent,
} from "solid-js";

export interface AnimatedBeamProps {
	class?: string;
	containerRef: HTMLElement;
	fromRef: HTMLElement;
	toRef: HTMLElement;
	curvature?: number;
	reverse?: boolean;
	pathColor?: string;
	pathWidth?: number;
	pathOpacity?: number;
	gradientStartColor?: string;
	gradientStopColor?: string;
	delay?: number;
	duration?: number;
	startXOffset?: number;
	startYOffset?: number;
	endXOffset?: number;
	endYOffset?: number;
}

const vaultBoy = "src/static/pipboy/assets/ui/vault_boy_walking.gif"

export const AnimatedBeam: Component<AnimatedBeamProps> = (props) => {
	const localProps = mergeProps(
		{
			curvature: 0,
			reverse: false,
			duration: Math.random() * 3 + 4,
			delay: 0,
			pathColor: "gray",
			pathWidth: 2,
			pathOpacity: 0.2,
			gradientStartColor: "#ffaa40",
			gradientStopColor: "#9c40ff",
			startXOffset: 0,
			startYOffset: 0,
			endXOffset: 0,
			endYOffset: 0,
		},
		props,
	);

	const id = createUniqueId();
	const [pathD, setPathD] = createSignal("");
	const [svgDimensions, setSvgDimensions] = createSignal({
		width: 0,
		height: 0,
	});

	// Calculate the gradient coordinates based on the reverse prop
	const gradientCoordinates = localProps.reverse
		? {
				x1: ["90%", "-10%"],
				x2: ["100%", "0%"],
				y1: ["0%", "0%"],
				y2: ["0%", "0%"],
			}
		: {
				x1: ["10%", "110%"],
				x2: ["0%", "100%"],
				y1: ["0%", "0%"],
				y2: ["0%", "0%"],
			};

	createEffect(() => {
		const updatePath = () => {
			if (localProps.containerRef && localProps.fromRef && localProps.toRef) {
				const containerRect = localProps.containerRef.getBoundingClientRect();
				const rectA = localProps.fromRef.getBoundingClientRect();
				const rectB = localProps.toRef.getBoundingClientRect();

				const svgWidth = containerRect.width;
				const svgHeight = containerRect.height;
				setSvgDimensions({ width: svgWidth, height: svgHeight });

				const startX =
					rectA.left -
					containerRect.left +
					rectA.width / 2 +
					localProps.startXOffset;
				const startY =
					rectA.top -
					containerRect.top +
					rectA.height / 2 +
					localProps.startYOffset;
				const endX =
					rectB.left -
					containerRect.left +
					rectB.width / 2 +
					localProps.endXOffset;
				const endY =
					rectB.top -
					containerRect.top +
					rectB.height / 2 +
					localProps.endYOffset;

				const controlY = startY - localProps.curvature;
				const d = `M ${startX},${startY} Q ${
					(startX + endX) / 2
				},${controlY} ${endX},${endY}`;
				setPathD(d);
			}
		};

		// Initialize ResizeObserver
		const resizeObserver = new ResizeObserver((entries) => {
			// For all entries, recalculate the path
			for (const entry of entries) {
				updatePath();
			}
		});

		// Observe the container element
		if (localProps.containerRef) {
			resizeObserver.observe(localProps.containerRef);
		}

		// Call the updatePath initially to set the initial path
		updatePath();

		// Clean up the observer on component unmount
		onCleanup(() => resizeObserver.disconnect());
	});

	let linearGradient!: SVGLinearGradientElement;
	onMount(() => {
		const controls = animate(linearGradient, gradientCoordinates, {
			duration: localProps.duration,
			delay: localProps.delay,
			ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
			repeat: Number.POSITIVE_INFINITY,
		});

		onCleanup(() => controls.stop());
	});

	return (
		<svg
			fill="none"
			aria-hidden="true"
			width={svgDimensions().width}
			height={svgDimensions().height}
			xmlns="http://www.w3.org/2000/svg"
			class={cn(
				"pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
				localProps.class,
			)}
			viewBox={`0 0 ${svgDimensions().width} ${svgDimensions().height}`}
		>
			<path
				d={pathD()}
				stroke={localProps.pathColor}
				stroke-width={localProps.pathWidth}
				stroke-opacity={localProps.pathOpacity}
				stroke-linecap="round"
			/>
			<path
				d={pathD()}
				stroke-width={localProps.pathWidth}
				stroke={`url(#${id})`}
				stroke-opacity="1"
				stroke-linecap="round"
			/>
			<defs>
				<linearGradient
					class="transform-gpu"
					id={id}
					gradientUnits="userSpaceOnUse"
					ref={linearGradient}
				>
					<stop stop-color={localProps.gradientStartColor} stop-opacity="0" />
					<stop stop-color={localProps.gradientStartColor} />
					<stop offset="32.5%" stop-color={localProps.gradientStopColor} />
					<stop
						offset="100%"
						stop-color={localProps.gradientStopColor}
						stop-opacity="0"
					/>
				</linearGradient>
			</defs>
		</svg>
	);
};

const Circle: ParentComponent<{ class?: string; ref?: HTMLDivElement }> = (
	props,
) => {
	return (
		<div
			ref={props.ref}
			class={cn(
				"z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				props.class,
			)}
		>
			{props.children}
		</div>
	);
};

export default function AnimatedBeamComponent() {
	let containerRef!: HTMLDivElement;
	let div1Ref!: HTMLDivElement;
	let div2Ref!: HTMLDivElement;
	let div3Ref!: HTMLDivElement;
	let div4Ref!: HTMLDivElement;
	let div5Ref!: HTMLDivElement;
	let div6Ref!: HTMLDivElement;
	let div7Ref!: HTMLDivElement;

	return (
		<div class="relative w-full mx-auto max-w-sm my-6" ref={containerRef}>
			<div class="flex size-full flex-col max-w-lg max-h-[50dvh] items-stretch justify-between gap-10">
				<div class="flex flex-row items-center justify-between">
					<Circle ref={div1Ref}>

					</Circle>
					<Circle ref={div5Ref}>

					</Circle>
				</div>
				<div class="flex flex-row items-center justify-between">
					<Circle ref={div2Ref}>

					</Circle>
					<Circle ref={div4Ref}>
						<img src={vaultBoy} class="w-full h-full" alt={"vault boy"} />
					</Circle>
					<Circle ref={div6Ref}>

					</Circle>
				</div>
				<div class="flex flex-row items-center justify-between">
					<Circle ref={div3Ref}>

					</Circle>
					<Circle ref={div7Ref}>

					</Circle>
				</div>
			</div>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div4Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div4Ref}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div7Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
				reverse
			/>
		</div>
	);
}
