import {Tabs} from "@ark-ui/solid";
import {soundTypes} from "~/lib/sounds";
import misc from "~/static/app/icons/apps/apple-app-33.png";
import {Component, Setter} from "solid-js";
import {classNames} from "~/components/navigation";
import cover from "~/static/pipboy/2000N/app_cover.png";

const MiscTab: Component<{
    value: string;
    setValue: Setter<string>
}> = (props) => {

    const value = () => props.value;

    return (
        <Tabs.Trigger
            onClick={() => props.setValue(() => "config")}
            value="config"
            data-bs-toggle="tab"
            data-bs-target="#config"
            role="tab"
            class={classNames(
                "relative",
                "size-10 md:size-8",
                value() === 'config' ? "brightness-[200%]" : "",
            )}
            data-play-sound={soundTypes.scifi_click}
        >
            <img src={misc} class={"size-full"} alt={"misc"}/>
            <img src={cover} class={"absolute inset-0 size-full"} alt={"cover"}/>
        </Tabs.Trigger>
    )
};

export default MiscTab;