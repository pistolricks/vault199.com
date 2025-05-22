import {Component, createEffect, createSignal, Match, onCleanup, onMount, Show, Switch} from "solid-js";
import UpdatingLayout from "~/components/layouts/updating/updating-layout";
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import {BaseNumberTicker} from "~/components/ui/number-ticker";
import ProgressBar from "~/components/ui/progress";
import {Dynamic} from "solid-js/web";
import {PipBoyUpdating} from "~/components/pipboy/pipboy-updating";
import {currentUser} from "~/app";


const Updating: Component<RouteSectionProps & { path?: string }> = props => {

    const navigate = useNavigate();


    createEffect(() => {
        console.log(currentUser().active())
        if(currentUser().active() === true){
            navigate("/dashboard")
        }
    })

    return (
        <UpdatingLayout {...props}>
            <Show when={!currentUser().active()}>
                <Dynamic component={PipBoyUpdating} path={"/dashboard"}/>
            </Show>
        </UpdatingLayout>
    );
};

export default Updating;