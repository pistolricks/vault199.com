import {Component, Setter} from "solid-js";
import {Tabs} from "@ark-ui/solid";
import {soundTypes} from "~/lib/sounds";
import data from "~/static/app/icons/fallout/tasks-work.png";
import {classNames} from "~/components/navigation";
import cover from "~/static/pipboy/2000N/app_cover.png";

type PROPS = {}

const QuestsTab: Component<{
    value: string;
    setValue: Setter<string>
    class?: string;
}> = (props) => {

    const value = () => props.value;

    const className = () => props.class ?? "";

    return (
        <div class={className()}>
            <Tabs.Trigger
                onClick={() => props.setValue(() => "data")}
                property={"a"}
                value="data"
                data-bs-toggle="tab"
                data-bs-target="#data"
                role="tab"
                class={classNames(
                    "relative",
                    value() === 'data' ? "brightness-[200%]" : "",
                    className()
                )}
                data-play-sound={soundTypes.scifi_click}
            >
                <img src={data} class={"size-10 rounded-bl-lg"} alt={"data"}/>
                <img src={cover} class={"transform rotate-45 absolute inset-0 size-full"} alt={"cover"}/>
            </Tabs.Trigger>
        </div>
    );
};

export default QuestsTab;