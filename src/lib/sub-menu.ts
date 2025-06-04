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
import stats from "~/static/app/icons/apps/apple-app-19.png"
import items from "~/static/app/icons/fallout/shopping.png"
import data from "~/static/app/icons/fallout/tasks-work.png";

export const collection = createListCollection({
    items: [
        /*DASHBOARD*/
        {
            label: '/dashboard', value: [
                {name: "items", href: '/items', icon: items},
                {name: "profile", href: '/profile', icon: stats},
                {name: "data", href: '/data', icon: data},
            ]
        },
        /*LOGIN*/
        {
            label: '/login', value: [
                {name: "items", href: '/items', icon: items},
                {name: "profile", href: '/profile', icon: stats},
                {name: "data", href: '/data', icon: data},
            ]
        },

        /*DATA*/

        {
            label: '/data', value: [
                {name: "contacts", href: '/data/contacts', icon: contacts},
                {name: "map", href: '/data/map', icon: map},
                {name: "media", href: '/data/media', icon: media},
            ]
        },
        {
          label: '/data/contacts', value: [
                {name: "contacts", href: '/data/contacts', icon: contacts},
                {name: "map", href: '/data/map', icon: map},
                {name: "media", href: '/data/media', icon: media},
            ]
        },
        {
            label: '/data/map', value: [
                {name: "contacts", href: '/data/contacts', icon: contacts},
                {name: "map", href: '/data/map', icon: map},
                {name: "media", href: '/data/media', icon: media},
            ]
        },
        {
            label: '/data/media', value: [
                {name: "contacts", href: '/data/contacts', icon: contacts},
                {name: "map", href: '/data/map', icon: map},
                {name: "media", href: '/data/media', icon: media},
            ]
        },


       /*ITEMS*/


        {
            label: '/items', value: [
                {name: "weapons", href: '/items/weapons', icon: weapons},
                {name: "armor", href: '/items/armor', icon: armor},
                {name: "misc", href: '/items/misc', icon: misc}
            ]
        },
        {
            label: '/items/weapons', value: [
                {name: "weapons", href: '/items/weapons', icon: weapons},
                {name: "armor", href: '/items/armor', icon: armor},
                {name: "misc", href: '/items/misc', icon: misc}
            ]
        },
        {
            label: '/items/armor', value: [
                {name: "weapons", href: '/items/weapons', icon: weapons},
                {name: "armor", href: '/items/armor', icon: armor},
                {name: "misc", href: '/items/misc', icon: misc}
            ]
        },
        {
            label: '/items/misc', value: [
                {name: "weapons", href: '/items/weapons', icon: weapons},
                {name: "armor", href: '/items/armor', icon: armor},
                {name: "misc", href: '/items/misc', icon: misc}
            ]
        },


        /*PROFILE*/


        {
            label: '/profile', value: [
                {name: "special", href: '/profile/special', icon: special},
                {name: "status", href: '/profile/status', icon: status},
                {name: "details", href: '/profile/details', icon: details},
            ]
        },
        {
            label: '/profile/status', value: [
                {name: "special", href: '/profile/special', icon: special},
                {name: "status", href: '/profile/status', icon: status},
                {name: "details", href: '/profile/details', icon: details},
            ]
        },
        {
            label: '/profile/special', value: [
                {name: "special", href: '/profile/special', icon: special},
                {name: "status", href: '/profile/status', icon: status},
                {name: "details", href: '/profile/details', icon: details},
            ]
        },
        {
            label: '/profile/details', value: [
                {name: "special", href: '/profile/special', icon: special},
                {name: "status", href: '/profile/status', icon: status},
                {name: "details", href: '/profile/details', icon: details},
            ]
        }
    ],
})

