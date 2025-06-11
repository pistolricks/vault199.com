import {Contact} from "~/components/lists/contact-list";

export type MenuItem = {
    name: string;
    icon: string;
    class?: string;
    href?: string;
    isAlt?: boolean|undefined;
}

export interface ActivatedLayoutRouteData {
    companion?: Contact; // Making companion optional as props.data?.companion suggests it might not always exist
    title?: string;
    avatar?: string;
    coords?: GeolocationCoordinates;
    component?: string;
}