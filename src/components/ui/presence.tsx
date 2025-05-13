import * as presence from "@zag-js/presence"
import {normalizeProps, useMachine} from "@zag-js/solid"
import {createMemo, JSX, Show, splitProps} from "solid-js"
import "./css/presence.css"

interface PresenceProps {
    present: boolean
    unmountOnExit?: boolean
    onExitComplete?: () => void
    children: JSX.Element
}

function Presence(props: PresenceProps) {
    const [machineProps, localProps] = splitProps(props, [
        "present",
        "unmountOnExit",
        "onExitComplete",
    ])

    const service = useMachine(presence.machine, machineProps)

    const api = createMemo(() => presence.connect(service, normalizeProps))
    const unmount = createMemo(() => !api().present && machineProps.unmountOnExit)

    return (
        <Show when={!unmount()}>
            <div
                hidden={!api().present}
                data-state={api().skip ? undefined : machineProps.present ? "open" : "closed"}
                ref={api().setNode}
                {...localProps}
            />
        </Show>
    )
}