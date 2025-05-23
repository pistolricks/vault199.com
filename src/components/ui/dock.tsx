import { cn } from "~/lib/utils";
import {
	type Accessor,
	type JSX,
	type ParentComponent,
	createContext,
	createSignal,
	mergeProps,
	splitProps,
	useContext,
} from "solid-js";

export interface DockProps extends JSX.HTMLAttributes<HTMLDivElement> {
	magnification?: number;
	distance?: number;
}

const DockContext = createContext<{
	mouseX: Accessor<number>;
	magnification: number;
	distance: number;
}>();

export const Dock: ParentComponent<DockProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, ["class", "children"]);
	const localProps = mergeProps(
		{ magnification: 60, distance: 150 },
		_localProps,
	);
	const [mouseX, setMouseX] = createSignal(Number.POSITIVE_INFINITY);

	return (
		<div //supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md
			class={cn(
				" flex items-end h-[60px] w-max gap-2 rounded-2xl  p-2 ",
				localProps.class,
			)}
			{...forwardProps}
			onMouseMove={(e) => setMouseX(e.pageX)}
			onMouseLeave={() => setMouseX(Number.POSITIVE_INFINITY)}
		>
			<DockContext.Provider
				value={{
					mouseX,
					magnification: localProps.magnification,
					distance: localProps.distance,
				}}
			>
				{localProps.children}
			</DockContext.Provider>
		</div>
	);
};

export interface DockIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
	size?: number;
}

export const DockIcon: ParentComponent<DockIconProps> = (props) => {
	const [localProps, forwardProps] = splitProps(props, ["class", "children"]);

	const size = () => props.size ?? 58;

	const dockContext = useContext(DockContext);
	if (!dockContext) {
		throw new Error("DockIcon must be used within a Dock");
	}

	let ref!: HTMLDivElement;

	const distance = () => {
		const bounds = ref?.getBoundingClientRect() ?? { x: 0, width: 0 };
		// track mouse position relative to icon till |150| units
		return Math.min(
			Math.max(
				dockContext.mouseX() - bounds.x - bounds.width / 2,
				-1 * dockContext.distance,
			),
			dockContext.distance,
		);
	};

	const baseWidth = size();

	const width = () =>
		((150 - Math.abs(distance())) / 150) *
			(dockContext.magnification - baseWidth) +
		baseWidth;

	return (
		<div
			ref={ref}
			class={cn(
				"flex aspect-square cursor-pointer items-center justify-center rounded-full",
				localProps.class,
			)}
			style={{ width: `${width()}px` }}
			{...forwardProps}
		>
			{localProps.children}
		</div>
	);
};
