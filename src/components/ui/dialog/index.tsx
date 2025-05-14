import type {ContentProps, DynamicProps} from '@corvu/dialog'
import Dialog from '@corvu/dialog'
import {Component, JSXElement, Setter, splitProps, ValidComponent} from 'solid-js'
import {cn} from "~/lib/utils";

type PROPS = {
    children?: JSXElement
    contextId: string,
    class?: string,
    open?: boolean,
    setOpen?: Setter<boolean>
}

const BaseDialog: Component<PROPS> = (props) => {

    const contextId = () => props.contextId;
    const children = () => props.children;

    const open = () => props.open ?? undefined;
    const setOpen = () => props.setOpen ?? undefined;

    return (
        <Dialog open={open()} onOpenChange={setOpen()} contextId={contextId()}>
            {children()}

            <Dialog.Portal contextId={contextId()}>
                <Dialog.Overlay
                    contextId={contextId()}
                    class="fixed inset-0 z-50 bg-black/50 data-open:animate-in data-open:fade-in-0% data-closed:animate-out data-closed:fade-out-0%"/>


            </Dialog.Portal>
        </Dialog>
    )
}

export default BaseDialog;

type DialogContentProps<T extends ValidComponent = "div"> = ContentProps<T> & {
    contextId: string
    class?: string,
    children?: JSXElement
}

const DialogContent = <T extends ValidComponent = "div">(
    props: DynamicProps<T, DialogContentProps<T>>
) => {
    const [, rest] = splitProps(props as DialogContentProps, ["contextId", "class", "children"])


    return (


        <Dialog.Content
            contextId={props.contextId}
            class={cn(
                "fixed left-1/2 top-1/2 z-50 flex h-37 w-80 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-4 rounded-lg border-2 border-corvu-400 bg-corvu-100 px-6 py-5 data-open:animate-in data-open:fade-in-0% data-open:zoom-in-95% data-open:slide-in-from-top-10% data-closed:animate-out data-closed:fade-out-0% data-closed:zoom-out-95% data-closed:slide-out-to-top-10%",
                props.class,
            )} {...rest}>
            {props.children}
        </Dialog.Content>
    )

}

export {DialogContent}