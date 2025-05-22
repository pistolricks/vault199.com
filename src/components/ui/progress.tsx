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
    const value = () => props.value;
    return (
        <>

            <div class="flex w-full gap-2">
                <label
                    id="p01f-label"
                    for="p01f"
                    class="order-2 mb-0 text-center text-xs text-pink-500"
                >
                    <span class="sr-only">uploading</span>

                </label>
                <progress
                    aria-labelledby="p01f-label"
                    id="p01f"
                    max="100"
                    value={value()}
                    class="block w-full min-w-[50dvh] overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-pink-500 [&::-moz-progress-bar]:bg-pink-500"
                >

                </progress>
            </div>
            {/*<!-- End Danger progress bar with trailing icon --> */}
        </>
    )
}