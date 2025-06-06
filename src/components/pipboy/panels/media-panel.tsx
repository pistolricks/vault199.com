import { Tabs } from "@ark-ui/solid";
import {Component} from "solid-js";
import {sounds} from "~/lib/sounds";
import FalloutAudioPlayer from "~/components/ui/audio";

type PROPS = {

}

const MediaPanel: Component<PROPS> = props => {

    return (
        <div
                      class="tab-pane fade"
                      role="tabpanel"
                      id="stats"
                      aria-labelledby="radio-tab"
        >
            <div class="pip-body">
                <FalloutAudioPlayer/>


            </div>
        </div>
    );
};

export default MediaPanel;