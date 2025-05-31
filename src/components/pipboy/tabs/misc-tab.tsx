import {Tabs} from "@ark-ui/solid";
import {soundTypes} from "~/lib/sounds";
import misc from "~/static/app/icons/apps/apple-app-33.png";
import {Component, Setter} from "solid-js";
import {classNames} from "~/components/navigation";

const MiscTab: Component<{
    value: string;
    setValue: Setter<string>
}> = (props) => {

    const value = () => props.value;

    return (
        <Tabs.Trigger
            onClick={() => props.setValue(() => "misc")}
            value="misc"
            data-bs-toggle="tab"
            data-bs-target="#misc"
            role="tab"
            class={classNames(
                value() === 'misc' ? "ring-2 ring-green-700 ring-offset-1 rounded-[25px]" : "",
                "br"
            )}
            data-play-sound={soundTypes.scifi_click}
        >
            <img src={misc} class={"size-10 rounded-lg"} alt={"misc"}/>
        </Tabs.Trigger>
    )
};

export default MiscTab;