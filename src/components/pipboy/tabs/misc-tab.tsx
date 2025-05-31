import { Tabs } from "@ark-ui/solid";
import {soundTypes} from "~/lib/sounds";
import misc from "~/static/app/icons/apps/apple-app-33.png";

const MiscTab = () => (

        <Tabs.Trigger
            value="misc"
            data-bs-toggle="tab"
            data-bs-target="#misc"
            role="tab"
            data-play-sound={soundTypes.scifi_click}
        >
            <img src={misc} class={"size-10 rounded-lg"} alt={"misc"} />
        </Tabs.Trigger>

);

export default MiscTab;