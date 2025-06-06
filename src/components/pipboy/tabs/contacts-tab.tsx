import {Tabs} from "@ark-ui/solid";
import {soundTypes} from "~/lib/sounds";
import misc from "~/static/app/icons/apps/apple-app-33.png";
import {Component, Setter} from "solid-js";
import {classNames} from "~/components/navigation";
import cover from "~/static/pipboy/2000N/app_cover.png";
import social from "~/static/app/icons/fallout/social.png";
const ContactsTab: Component<{
    value: string;
    setValue: Setter<string>
}> = (props) => {

    const value = () => props.value;

    return (
        <Tabs.Trigger
            onClick={() => props.setValue(() => "contact")}
            value="contact"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            role="tab"
            class={classNames(
                "relative",
                "size-10 md:size-8",
                value() === 'contact' ? "brightness-[200%]" : "",
            )}
            data-play-sound={soundTypes.scifi_click}
        >
            <img src={social} class={"size-full"} alt={"contact"}/>
            <img src={cover} class={"absolute inset-0 size-full"} alt={"cover"}/>
        </Tabs.Trigger>
    )
};

export default ContactsTab;