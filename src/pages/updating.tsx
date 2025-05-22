import {Component, createEffect, Show} from "solid-js";
import UpdatingLayout from "~/components/layouts/updating/updating-layout";
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import {Dynamic} from "solid-js/web";
import {PipBoyUpdating} from "~/components/pipboy/pipboy-updating";
import {cookies, currentUser} from "~/app";
import ActivatePipboy from "~/components/pipboy/activate-pipboy";


const Updating: Component<RouteSectionProps & { path?: string }> = props => {

    const navigate = useNavigate();


    createEffect(() => {
        console.log(cookies.get('token'))
        if (cookies.get('token') as unknown as boolean === true) {
            navigate("/dashboard")
        }
    })

    return (

        <UpdatingLayout {...props}>

            <Show when={!cookies.get("active") as unknown as boolean}>

                <ActivatePipboy {...props} />

                <Dynamic component={PipBoyUpdating} path={"/dashboard"}/>

            </Show>
        </UpdatingLayout>

    );
};

export default Updating;