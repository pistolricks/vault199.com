import Drawer from '@corvu/drawer'
import DrawerPrimitive, {type ContentProps, type DynamicProps} from '@corvu/drawer'
import {JSXElement, Setter, splitProps, type ValidComponent} from "solid-js";
import {cn} from "~/lib/utils";


type PROPS = {
    children?: JSXElement
    contextId: string,
    class?: string,
    side?: 'top' | 'right' | 'bottom' | 'left'
    open?: boolean,
    setOpen?: Setter<boolean>
}

function BaseDrawer(props: PROPS) {
    const side = () => props.side ?? "right";
    const contextId = () => props.contextId;
    const children = () => props.children;

    const open = () => props.open ?? undefined;
    const setOpen = () => props.setOpen ?? undefined;

    return (
        <DrawerPrimitive open={open()} onOpenChange={setOpen()} contextId={contextId()} breakPoints={[1]} side={side()}>
            {(props) => (
                <>

                    {children()}

                    <Drawer.Portal contextId={contextId()}>
                        <Drawer.Overlay
                            contextId={contextId()}
                            class="fixed h-sc inset-0 z-40 data-transitioning:transition-colors data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]"
                            style={{
                                'background-color': `rgb(0 0 0 / ${
                                    0.5 * props.openPercentage
                                })`,
                            }}
                        />

                    </Drawer.Portal>
                </>
            )}
        </DrawerPrimitive>
    )
}

export default BaseDrawer


type DrawerContentProps<T extends ValidComponent = "div"> = ContentProps<T> & {
    contextId: string
    class?: string,
    side?: 'top' | 'right' | 'bottom' | 'left',
    children?: JSXElement
}
const DrawerContent = <T extends ValidComponent = "div">(
    props: DynamicProps<T, DrawerContentProps<T>>
) => {
    const [, rest] = splitProps(props as DrawerContentProps, ["children", "contextId", "class", "side", "children"])

    const list = () => props.list ?? [];
    const side = () => props.side ?? 'bottom'


    let sides = {
        top: "fixed w-full inset-x-0 top-0 z-50 flex h-full border-l-2 border-b-2 border-r-2  rounded-b-lg after:absolute after:inset-x-0 after:top-[calc(100%-1px)] after:h-1/2 z-50 flex flex-col pt-3 after:bg-inherit data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] md:select-none",
        right: "fixed inset-y-0 right-0 z-50 w-screen md:max-w-md border-l-2 flex h-screen flex-col after:bg-inherit data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] md:select-none",
        bottom: "fixed w-full inset-x-0 bottom-0 z-50 flex h-full border-l-2 border-t-2 border-r-2  rounded-t-lg after:absolute after:inset-x-0 after:top-[calc(100%-1px)] after:h-1/2 z-50 flex flex-col pt-3 after:bg-inherit data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] md:select-none",
        left: "fixed inset-y-0 left-0 z-50 w-screen md:max-w-md border-r-2 flex h-screen flex-col after:bg-inherit data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] md:select-none",
    }[side() as 'top' | 'right' | 'bottom' | 'left'];


    return (
        <DrawerPrimitive.Content
            contextId={props.contextId}
            class={cn(
                "border-corvu-400 bg-corvu-bg",
                props.class,
                sides
            )}
            {...rest}
        >


            {props.children}

        </DrawerPrimitive.Content>

    )
}


export {DrawerContent}
