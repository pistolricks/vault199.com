import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import ActivatedLayout from "~/components/layouts/activated/activated-layout";
import {ActivatedLayoutRouteData} from "~/lib/types";

import PipBoy from "~/components/pipboy";
import {getGps} from "~/lib/geo";
import {Contact} from "~/components/lists/contact-list";
import ProfilePanel from "~/components/pipboy/panels/profile-panel";
import BaseDrawer from "~/components/ui/drawer";

import status from "~/static/app/icons/ui/status.png"
import special from "~/static/app/icons/ui/special.png"
import details from "~/static/app/icons/ui/details.png"
import {MenuItem} from "~/lib/types";

type PROPS = {}

const menuItems: MenuItem[] = [
    {name: "status", href: '/profile/status', icon: status},
    {name: "special", href: '/profile/special', icon: special},
    {name: "details", href: '/profile/details', icon: details},
]

const DetailsSection: Component<RouteSectionProps> = props => {



    return (
        <ProfilePanel/>
    );
};

export default DetailsSection;