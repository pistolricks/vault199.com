import {Component, Setter} from "solid-js";
import {Tabs} from "@ark-ui/solid";
import {soundTypes} from "~/lib/sounds";
import profile from "~/static/app/icons/fallout/shopping.png"
import {classNames} from "~/components/navigation";


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
                onClick={() => props.setValue(() => "items")}
                property={"a"}
                value="items"
                data-bs-toggle="tab"
                data-bs-target="#items"
                role="tab"
                class={classNames(
                    value() === 'items' ? "ring-2 ring-green-700 ring-offset-1 rounded-[25px]" : "",
                    "br"
                )}
                data-play-sound={soundTypes.scifi_click}
            >
                <img src={profile} class={"size-10 rounded-lg"} alt={"profile"}/>
            </Tabs.Trigger>
        </div>
    );
};

export default ProfilesTab;