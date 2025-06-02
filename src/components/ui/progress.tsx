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


export default function ProgressBar(props: {value: number}) {
    const value = () => props.value ?? 0;
    return (
        <Progress.Root defaultValue={value()}>
            <Progress.Track asChild={(props) => <div class={"h-4  bg-red-200"}></div>}>
                <Progress.Range />
            </Progress.Track>
        </Progress.Root>
    )
}