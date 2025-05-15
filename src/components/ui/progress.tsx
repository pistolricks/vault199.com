import {createEffect, createSignal, Setter} from 'solid-js'
import {Progress} from '@ark-ui/solid'


export const ProgressComponent = (props: { start: boolean, setValue?: Setter<number> }) => {
    const [value, setValue] = createSignal(0)
    createEffect(() => {
        if (!props.start) return;

        const interval = setInterval(() => {
            setValue((value) => (value === 100 ? 100 : value + 1))
        }, Math.random() * 500)
        props.setValue(value())

        return () => clearInterval(interval)


    })


    return (
        <Progress.Root value={value()} defaultValue={0} min={0} max={100} {...props} class={``}>
            <Progress.ValueText />
            <Progress.Track>
                <Progress.Range />
            </Progress.Track>

        </Progress.Root>
    )
}