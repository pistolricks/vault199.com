import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import {MenuItem} from "~/lib/types";
import ProfilePanel from "~/components/pipboy/panels/profile-panel";

import status from "~/static/app/icons/ui/status.png"
import special from "~/static/app/icons/ui/special.png"
import details from "~/static/app/icons/ui/details.png"
import DetailsPanel from "~/components/pipboy/panels/details-panel";

type PROPS = {}

const menuItems: MenuItem[] = [
    {name: "status", href: '/profile/status', icon: status},
    {name: "special", href: '/profile/special', icon: special},
    {name: "details", href: '/profile/details', icon: details},
]

const DetailsSection: Component<RouteSectionProps> = props => {


    return (
        <DetailsPanel/>
    );
};

export default DetailsSection;