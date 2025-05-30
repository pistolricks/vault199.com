import { Tabs } from "@ark-ui/solid";
import {soundTypes} from "~/lib/sounds";

const MiscTab = () => (

        <Tabs.Trigger
            value="misc"
            data-bs-toggle="tab"
            data-bs-target="#misc"
            role="tab"
            data-play-sound={soundTypes.scifi_click}
        >
            Misc
        </Tabs.Trigger>

);

export default MiscTab;