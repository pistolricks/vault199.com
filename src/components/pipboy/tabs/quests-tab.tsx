import {Component, Setter} from "solid-js";
import {Tabs} from "@ark-ui/solid";
import {soundTypes} from "~/lib/sounds";
import data from "~/static/app/icons/fallout/tasks-work.png";
import {classNames} from "~/components/navigation";

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
                    value() === 'data' ? "brightness-[200%]" : "",
                    className()
                )}
                data-play-sound={soundTypes.scifi_click}
            >
                <img src={data} class={"size-10"} alt={"data"}/>
            </Tabs.Trigger>
        </div>
    );
};

export default QuestsTab;