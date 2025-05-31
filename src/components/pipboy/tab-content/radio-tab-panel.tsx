import { Tabs } from "@ark-ui/solid";
import {Component} from "solid-js";
import {sounds} from "~/lib/sounds";
import FalloutAudioPlayer from "~/components/ui/audio";

type PROPS = {

}

const RadioTabPanel: Component<PROPS> = props => {

    return (
        <Tabs.Content value={"radio"}
                      class="tab-pane fade"
                      role="tabpanel"
                      id="stats"
                      aria-labelledby="radio-tab"
        >
            <h3 class="pip-title">Radio</h3>
            <div class="pip-body">
                <FalloutAudioPlayer/>


            </div>
        </Tabs.Content>
    );
};

export default RadioTabPanel;