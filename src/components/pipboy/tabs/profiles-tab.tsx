import {Component, Setter} from "solid-js";
import {Tabs} from "@ark-ui/solid";
import {soundTypes} from "~/lib/sounds";
import profile from "~/static/app/icons/fallout/shopping.png"
import {classNames} from "~/components/navigation";
import cover from "~/static/pipboy/2000N/app_cover.png";


type PROPS = {}

const ProfilesTab: Component<{
    value: string;
    setValue: Setter<string>
    class?: string;
}> = (props) => {

    const value = () => props.value;

    const className = () => props.class ?? "";

    return (
        <div class={className()}>
            <Tabs.Trigger
                onClick={() => props.setValue(() => "inv")}
                property={"a"}
                value="inv"
                data-bs-toggle="tab"
                data-bs-target="#inv"
                role="tab"
                class={classNames(
                    "relative",
                    value() === 'inv' ? "brightness-[200%]" : "",
                    className()
                )}
                data-play-sound={soundTypes.scifi_click}
            >
                <img src={profile} class={"size-10"} alt={"profile"}/>
                <img src={cover} class={"transform rotate-12 absolute inset-0 size-full"} alt={"cover"}/>
            </Tabs.Trigger>
        </div>
    );
};

export default ProfilesTab;