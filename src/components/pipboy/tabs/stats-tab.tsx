import {Component, Setter} from "solid-js";
import {soundTypes} from "~/lib/sounds";
import { Tabs } from "@ark-ui/solid";
import stats from "~/static/app/icons/apps/apple-app-19.png"
import {classNames} from "~/components/navigation";
import cover from "~/static/pipboy/2000N/app_cover.png";

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
                "relative",
                "rounded-tr-lg",
                value() === 'stats' ? "brightness-[200%]" : "",
                className()
            )}
            data-play-sound={soundTypes.scifi_click}
        >
            <img src={stats} class={"size-10 rounded-tr-lg"} alt={"stats"} />
            <img src={cover} class={"transform rotate-12 absolute inset-0 size-full"} alt={"cover"}/>
        </Tabs.Trigger>
        </div>
    );
};

export default StatsTab;