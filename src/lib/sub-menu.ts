import {createListCollection} from '@ark-ui/solid/collection'
import contacts from "~/static/app/icons/ui/contacts.png";
import map from "~/static/app/icons/ui/map.png";
import media from "~/static/app/icons/ui/details.png";
import cover from "~/static/pipboy/2000N/app_cover.png";
import weapons from "~/static/app/icons/ui/weapons.png"
import armor from "~/static/app/icons/ui/armor.png"
import misc from "~/static/app/icons/ui/misc.png"
import status from "~/static/app/icons/ui/status.png";
import special from "~/static/app/icons/ui/special.png";
import details from "~/static/app/icons/ui/details.png";
import stats from "~/static/app/icons/apps/apple-app-19.png"
import items from "~/static/app/icons/fallout/shopping.png"
import data from "~/static/app/icons/fallout/tasks-work.png";
import strength from "~/static/special/strength.webp"
import perception from "~/static/special/perception.webp"
import endurance from "~/static/special/endurance.png"
import charisma from "~/static/special/charisma.webp"
import intelligence from "~/static/special/intelligence.webp"
import agility from "~/static/special/agility.webp"
import luck from "~/static/special/luck.webp"

export const subCollection = createListCollection({
    items: [
        /*DASHBOARD*/
        {
            label: '/dashboard', value: [
                {name: "dashboard", href: '#', icon: cover},
                {name: "dashboard", href: '#', icon: cover},
                {name: "items", href: '/items', icon: items},
                {name: "profile", href: '/profile', icon: stats},
                {name: "data", href: '/data', icon: data},
                {name: "dashboard", href: '#', icon: cover},
                {name: "dashboard", href: '#', icon: cover},
            ]
        },
        /*LOGIN*/
        {
            label: '/login', value: [
                {name: "login", href: '#', icon: cover},
                {name: "login", href: '#', icon: cover},
                {name: "items", href: '/items', icon: items},
                {name: "profile", href: '/profile', icon: stats},
                {name: "data", href: '/data', icon: data},
                {name: "login", href: '#', icon: cover},
                {name: "login", href: '#', icon: cover},
            ]
        },

        /*DATA*/

        {
            label: '/data', value: [
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
                {name: "contacts", href: '/data/contacts', icon: contacts},
                {name: "map", href: '/data/map', icon: map},
                {name: "media", href: '/data/media', icon: media},
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
            ]
        },
        {
          label: '/data/contacts', value: [
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
                {name: "contacts", href: '/data/contacts', icon: contacts},
                {name: "map", href: '/data/map', icon: map},
                {name: "media", href: '/data/media', icon: media},
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
            ]
        },
        {
            label: '/data/map', value: [
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
                {name: "contacts", href: '/data/contacts', icon: contacts},
                {name: "map", href: '/data/map', icon: map},
                {name: "media", href: '/data/media', icon: media},
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
            ]
        },
        {
            label: '/data/media', value: [
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
                {name: "contacts", href: '/data/contacts', icon: contacts},
                {name: "map", href: '/data/map', icon: map},
                {name: "media", href: '/data/media', icon: media},
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
            ]
        },


       /*ITEMS*/


        {
            label: '/items', value: [
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
                {name: "weapons", href: '/items/weapons', icon: weapons},
                {name: "armor", href: '/items/armor', icon: armor},
                {name: "misc", href: '/items/misc', icon: misc},
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
            ]
        },
        {
            label: '/items/weapons', value: [
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
                {name: "weapons", href: '/items/weapons', icon: weapons},
                {name: "armor", href: '/items/armor', icon: armor},
                {name: "misc", href: '/items/misc', icon: misc},
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
            ]
        },
        {
            label: '/items/armor', value: [
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
                {name: "weapons", href: '/items/weapons', icon: weapons},
                {name: "armor", href: '/items/armor', icon: armor},
                {name: "misc", href: '/items/misc', icon: misc},
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
            ]
        },
        {
            label: '/items/misc', value: [
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
                {name: "weapons", href: '/items/weapons', icon: weapons},
                {name: "armor", href: '/items/armor', icon: armor},
                {name: "misc", href: '/items/misc', icon: misc},
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
            ]
        },


        /*PROFILE*/


        {
            label: '/profile', value: [
                {name: "profile", href: '#', icon: cover},
                {name: "profile", href: '#', icon: cover},
                {name: "special", href: '/profile/special', icon: special},
                {name: "status", href: '/profile/status', icon: status},
                {name: "details", href: '/profile/details', icon: details},
                {name: "profile", href: '#', icon: cover},
                {name: "profile", href: '#', icon: cover},
            ]
        },
        {
            label: '/profile/status', value: [
                {name: "profile", href: '#', icon: cover},
                {name: "profile", href: '#', icon: cover},
                {name: "special", href: '/profile/special', icon: special},
                {name: "status", href: '/profile/status', icon: status},
                {name: "details", href: '/profile/details', icon: details},
                {name: "profile", href: '#', icon: cover},
                {name: "profile", href: '#', icon: cover},
            ]
        },
        {
            label: '/profile/special', value: [
                {name: "strength", href: '/profile/special/strength', icon: strength},
                {name: "perception", href: '/profile/special/perception', icon: perception},
                {name: "endurance", href: '/profile/special/endurance', icon: endurance},
                {name: "charisma", href: '/profile/special', icon: charisma},
                {name: "intelligence", href: '/profile/special/intelligence', icon: intelligence},
                {name: "agility", href: '/profile/special/agility', icon: agility},
                {name: "luck", href: '/profile/special/luck', icon: luck},
            ]
        },
        {
            label: '/profile/details', value: [
                {name: "dashboard", href: '#', icon: cover},
                {name: "dashboard", href: '#', icon: cover},
                {name: "special", href: '/profile/special', icon: special},
                {name: "status", href: '/profile/status', icon: status},
                {name: "details", href: '/profile/details', icon: details},
                {name: "dashboard", href: '#', icon: cover},
                {name: "dashboard", href: '#', icon: cover},
            ]
        }
    ],
})

