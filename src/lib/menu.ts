import {createListCollection} from '@ark-ui/solid/collection'
import contacts from "~/static/app/icons/ui/contacts.png";
import map from "~/static/app/icons/misc_apps/30misc-apps-30.png";

import radio from "~/static/app/icons/fallout/radio.png";
import weapons from "~/static/app/icons/ui/weapons.png"
import armor from "~/static/app/icons/ui/armor.png"
import misc from "~/static/app/icons/ui/misc.png"
// import status from "~/static/app/icons/ui/status.png";
import special from "~/static/app/icons/fallout/social.png";
import status from "~/static/app/icons/color/vb-health.png"
import details from "~/static/app/icons/fallout/details.png";

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
        /*REGISTER*/
        {
            label: '/register', value: [
                {name: "items", href: '/items', icon: items},
                {name: "profile", href: '/profile', icon: stats},
                {name: "data", href: '/data', icon: data},
            ]
        },
        /*DATA*/

        {
            label: '/data', value: [
                {name: "map", href: '/data/map', icon: map, class: 'p-2 grayscale-75'},
                {name: "contacts", href: '/data/contacts', icon: contacts, class: 'p-2 grayscale-50'},
                {name: "media", href: '/data/media', icon: radio, class: 'p-2 grayscale-50'},
            ]
        },
        {
            label: '/data/contacts', value: [
                {name: "map", href: '/data/map', icon: map, class: 'p-2 grayscale-75'},
                {name: "contacts", href: '/data/contacts', icon: contacts, class: 'p-2 grayscale-50'},
                {name: "media", href: '/data/media', icon: radio, class: 'p-2 grayscale-50'},
            ]
        },
        {
            label: '/data/map', value: [
                {name: "map", href: '/data/map', icon: map, class: 'p-2 grayscale-75'},
                {name: "contacts", href: '/data/contacts', icon: contacts, class: 'p-2 grayscale-50'},
                {name: "media", href: '/data/media', icon: radio, class: 'p-2 grayscale-50'},
            ]
        },
        {
            label: '/data/media', value: [
                {name: "map", href: '/data/map', icon: map, class: 'p-2 grayscale-100'},
                {name: "contacts", href: '/data/contacts', icon: contacts, class: 'p-2 grayscale-50'},
                {name: "media", href: '/data/media', icon: radio, class: 'p-2 grayscale-50'},
            ]
        },


        /*ITEMS*/


        {
            label: '/items', value: [
                {name: "weapons", href: '/items/weapons', icon: weapons, class: 'p-2 grayscale-100'},
                {name: "armor", href: '/items/armor', icon: armor, class: 'p-2 grayscale-100'},
                {name: "misc", href: '/items/misc', icon: misc, class: 'p-2 grayscale-100'},
            ]
            , class: 'p-2 grayscale-100'
        },
        {
            label: '/items/weapons', value: [
                {name: "weapons", href: '/items/weapons', icon: weapons, class: 'p-2 grayscale-100'},
                {name: "armor", href: '/items/armor', icon: armor, class: 'p-2 grayscale-100'},
                {name: "misc", href: '/items/misc', icon: misc, class: 'p-2 grayscale-100'},
            ]
        },
        {
            label: '/items/armor', value: [
                {name: "weapons", href: '/items/weapons', icon: weapons, class: 'p-2 grayscale-100'},
                {name: "armor", href: '/items/armor', icon: armor, class: 'p-2 grayscale-100'},
                {name: "misc", href: '/items/misc', icon: misc, class: 'p-2 grayscale-100'},
            ]
        },
        {
            label: '/items/misc', value: [
                {name: "weapons", href: '/items/weapons', icon: weapons, class: 'p-2 grayscale-100'},
                {name: "armor", href: '/items/armor', icon: armor, class: 'p-2 grayscale-100'},
                {name: "misc", href: '/items/misc', icon: misc, class: 'p-2 grayscale-100'},
            ]
        },


        /*PROFILE*/


        {
            label: '/profile', value: [
                {name: "special", href: '/profile/special', icon: special, class: 'p-1 grayscale-50'},
                {name: "status", href: '/profile/status', icon: status, class: 'p-0.5 grayscale-50'},
                {name: "details", href: '/profile/details', icon: details, class: 'p-1 grayscale-50'},
            ]
        },
        {
            label: '/profile/status', value: [
                {name: "special", href: '/profile/special', icon: special, class: 'p-1 grayscale-50'},
                {name: "status", href: '/profile/status', icon: status, class: 'p-0.5 grayscale-50'},
                {name: "details", href: '/profile/details', icon: details, class: 'p-1 grayscale-50'},
            ]
        },
        {
            label: '/profile/special', value: [
                {name: "special", href: '/profile/special', icon: special, class: 'p-1 grayscale-50'},
                {name: "status", href: '/profile/status', icon: status, class: 'p-0.5 grayscale-50'},
                {name: "details", href: '/profile/details', icon: details, class: 'p-1 grayscale-50'},
            ]
        },
        {
            label: '/profile/details', value: [
                {name: "special", href: '/profile/special', icon: special, class: 'p-1 grayscale-50'},
                {name: "status", href: '/profile/status', icon: status, class: 'p-0.5 grayscale-50'},
                {name: "details", href: '/profile/details', icon: details, class: 'p-1 grayscale-50'},
            ]
        }
    ],
})

