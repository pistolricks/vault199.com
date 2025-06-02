import {createListCollection} from '@ark-ui/solid/collection'
import contacts from "~/static/app/icons/ui/contacts.png";
import map from "~/static/app/icons/ui/map.png";
import media from "~/static/app/icons/ui/details.png";

import weapons from "~/static/app/icons/ui/weapons.png"
import armor from "~/static/app/icons/ui/armor.png"
import misc from "~/static/app/icons/ui/misc.png"
import status from "~/static/app/icons/ui/status.png";
import special from "~/static/app/icons/ui/special.png";
import details from "~/static/app/icons/ui/details.png";

export const collection = createListCollection({
    items: [
        {
            label: '/data', value: [
                {name: "contacts", href: '/data/contacts', icon: contacts},
                {name: "map", href: '/data/map', icon: map},
                {name: "media", href: '/data/media', icon: media},
            ]
        },
        {
            label: '/items', value: [
                {name: "weapons", href: '/items/weapons', icon: weapons},
                {name: "armor", href: '/items/armor', icon: armor},
                {name: "misc", href: '/items/misc', icon: misc}
            ]
        },
        {
            label: '/profile', value: [
                {name: "status", href: '/profile/status', icon: status},
                {name: "special", href: '/profile/special', icon: special},
                {name: "details", href: '/profile/details', icon: details},
            ]
        }
    ],
})

