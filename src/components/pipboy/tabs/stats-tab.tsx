import {Component, Setter} from "solid-js";
import {soundTypes} from "~/lib/sounds";
import { Tabs } from "@ark-ui/solid";
import stats from "~/static/app/icons/apps/apple-app-19.png"
import {classNames} from "~/components/navigation";

type PROPS = {

}

const StatsTab: Component<{
    value: string;
    setValue: Setter<string>
    class?: string;
}> = (props) => {

        const value = () => props.value;

        const className = () => props.class ?? "";

    return (
        <div class={className()}>
        <Tabs.Trigger
            onClick={() => props.setValue(() => "stats")}
            value="stats"
            data-bs-toggle="tab"
            data-bs-target="#stats"
            role="tab"
            class={classNames(
                value() === 'stats' ? "brightness-[200%] rounded-bl-2xl" : "",
                className()
            )}
            data-play-sound={soundTypes.scifi_click}
        >
            <img src={stats} class={"size-10 rounded-bl-2xl"} alt={"stats"} />
        </Tabs.Trigger>
        </div>
    );
};

export default StatsTab;