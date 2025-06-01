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
            onClick={() => props.setValue(() => "settings")}
            value="settings"
            data-bs-toggle="tab"
            data-bs-target="#settings"
            role="tab"
            class={classNames(
                value() === 'settings' ? "brightness-[200%]" : "",
            )}
            data-play-sound={soundTypes.scifi_click}
        >
            <img src={misc} class={"size-10 lg:size-8 rounded-tl-2xl md:rounded-none"} alt={"misc"}/>
        </Tabs.Trigger>
    )
};

export default MiscTab;