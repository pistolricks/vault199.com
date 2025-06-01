import {Component} from "solid-js";
import {Tabs} from "@ark-ui/solid";
import ScreenLayout from "~/components/layouts/screen/screen-layout";
import {Contact, ContactList} from "~/components/lists/contact-list";
import crossAvatar from "~/static/companions/cross/cross.webp";
import butchAvatar from "~/static/companions/butch/butch.webp";
import cloverAvatar from "~/static/companions/clover/clover.webp";
import sergeantAvatar from "~/static/companions/sergeant/sergeant.webp";
import jerichoAvatar from "~/static/companions/jericho/jericho.webp";
import fawkesAvatar from "~/static/companions/fawkes/fawkes.webp";
import dogmeatAvatar from "~/static/companions/dogmeat/dogmeat.webp";
import charonAvatar from "~/static/companions/charon/charon.webp";


const MapTabPanel: Component<{

}> = (props) => {


    return (
        <Tabs.Content
            value={"MapTabComponent"}
            class="tab-pane fade show active"
            role="tabpanel"
            id="map"
            aria-labelledby="map-tab"
        >

            <div class="pip-body">

                <div class={"flex flex-col justify-center items-center overflow-y-hidden h-[74dvh] w-full"}>

                    <ScreenLayout height={"74dvh"}>

                        TEST

                    </ScreenLayout>
                </div>

            </div>
        </Tabs.Content>
    );
};
export default MapTabPanel;

