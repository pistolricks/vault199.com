import {createListCollection} from '@ark-ui/solid/collection'
import contacts from "~/static/app/icons/ui/contacts.png";
import video from "~/static/app/icons/apps/apple-app-2.png"
import mapPosition from "~/static/app/icons/fallout/map.png";
import map from "~/static/app/icons/misc_apps/30misc-apps-30.png";
import camera from "~/static/app/icons/apps/apple-app-27.png";
import radio from "~/static/app/icons/apps/apple-app-8.png";
import gallery from "~/static/app/icons/apps/apple-app-31.png";
import cover from "~/static/app/icons/apps/blank.png";
import contactList from "~/static/app/icons/fallout/tech.png"
import weapons from "~/static/app/icons/ui/weapons.png"
import armor from "~/static/app/icons/ui/armor.png"
import misc from "~/static/app/icons/ui/misc.png"
import special from "~/static/app/icons/fallout/social.png";
import status from "~/static/app/icons/color/vb-health.png"
import details from "~/static/app/icons/fallout/details.png";
import strength from "~/static/special/strength.webp"
import perception from "~/static/special/perception.webp"
import endurance from "~/static/special/endurance.png"
import charisma from "~/static/special/charisma.webp"
import intelligence from "~/static/special/intelligence.webp"
import agility from "~/static/special/agility.webp"
import luck from "~/static/special/luck.webp"
import media from "~/static/app/icons/ui/media.png";

export const subCollection = createListCollection({
    items: [
        /*Index*/
        {
            label: '/', value: [
                {name: "home", href: '#', icon: cover, class: 'opacity-60'},
                {name: "home", href: '#', icon: cover, class: 'opacity-60'},
                {name: "home", href: '#', icon: cover, class: 'opacity-60'},
                {name: "home", href: '#', icon: cover, class: 'opacity-60'},
                {name: "home", href: '#', icon: cover, class: 'opacity-60'},
                {name: "home", href: '#', icon: cover, class: 'opacity-60'},
                {name: "home", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        /*DASHBOARD*/
        {
            label: '/dashboard', value: [
                {name: "dashboard", href: '#', icon: cover, class: 'opacity-60'},
                {name: "dashboard", href: '#', icon: cover, class: 'opacity-60'},
                {name: "dashboard", href: '#', icon: cover, class: 'opacity-60'},
                {name: "dashboard", href: '#', icon: cover, class: 'opacity-60'},
                {name: "dashboard", href: '#', icon: cover, class: 'opacity-60'},
                {name: "dashboard", href: '#', icon: cover, class: 'opacity-60'},
                {name: "dashboard", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        /*LOGIN*/
        {
            label: '/login', value: [
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        /*REGISTER*/
        {
            label: '/register', value: [
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
                {name: "login", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        /*DATA*/

        {
            label: '/data', value: [
                {name: "data", href: '#', icon: cover, class: 'opacity-60'},
                {name: "data", href: '#', icon: cover, class: 'opacity-60'},
                {name: "map", href: '/data/map', icon: map, class: 'p-2 grayscale-75'},
                {name: "contacts", href: '/data/contacts', icon: contacts, class: 'p-2 grayscale-50'},
                {name: "media", href: '/data/media', icon: media, class: 'p-2.5 grayscale-50'},
                {name: "data", href: '#', icon: cover, class: 'opacity-60'},
                {name: "data", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        {
            label: '/data/contacts', value: [
                {name: "contacts", href: '#', icon: cover, class: 'opacity-60'},
                {name: "contacts", href: '#', icon: cover, class: 'opacity-60'},
                {name: "contacts", href: '#', icon: cover, class: 'opacity-60'},
                {name: "contacts", href: 'contacts', icon: contactList, class: 'p-1 grayscale-50', isAlt: true},
                {name: "contacts", href: '#', icon: cover, class: 'opacity-60'},
                {name: "contacts", href: '#', icon: cover, class: 'opacity-60'},
                {name: "contacts", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        {
            label: '/data/map', value: [
                {name: "map", href: '#', icon: cover, class: 'opacity-60'},
                {name: "map", href: '#', icon: cover, class: 'opacity-60'},
                {name: "map", href: '#', icon: cover, class: 'opacity-60'},
                {name: "map", href: 'map', icon: mapPosition, class: 'p-1 grayscale-50', isAlt: true},
                {name: "map", href: '#', icon: cover, class: 'opacity-60'},
                {name: "map", href: '#', icon: cover, class: 'opacity-60'},
                {name: "map", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        {
            label: '/data/media', value: [
                {name: "media", href: '#', icon: cover, class: 'opacity-60'},
                {name: "media", href: '#', icon: cover, class: 'opacity-60'},
                {name: "media", href: '#', icon: cover, class: 'opacity-60'},
                {name: "audio", href: 'audio', icon: radio, class: 'p-1.5 grayscale-50', isAlt: false},
                {name: "camera", href: 'camera', icon: camera, class: 'p-1 grayscale-50', isAlt: false},
                {name: "video", href: 'video', icon: video, class: 'p-1 grayscale-50', isAlt: true},
                {name: "gallery", href: 'gallery', icon: gallery, class: 'p-1.5 grayscale-50', isAlt: true},

            ]
        },


        /*ITEMS*/


        {
            label: '/items', value: [
                {name: "items", href: '#', icon: cover, class: 'opacity-60'},
                {name: "items", href: '#', icon: cover, class: 'opacity-60'},
                {name: "weapons", href: '/items/weapons', icon: weapons, class: 'p-2 grayscale-100'},
                {name: "armor", href: '/items/armor', icon: armor, class: 'p-2 grayscale-100'},
                {name: "misc", href: '/items/misc', icon: misc, class: 'p-2 grayscale-100'},
                {name: "items", href: '#', icon: cover, class: 'opacity-60'},
                {name: "items", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        {
            label: '/items/weapons', value: [
                {name: "weapons", href: '#', icon: cover, class: 'opacity-60'},
                {name: "weapons", href: '#', icon: cover, class: 'opacity-60'},
                {name: "weapons", href: '#', icon: cover, class: 'opacity-60'},
                {name: "weapons", href: '#', icon: cover, class: 'opacity-60'},
                {name: "weapons", href: '#', icon: cover, class: 'opacity-60'},
                {name: "weapons", href: '#', icon: cover, class: 'opacity-60'},
                {name: "weapons", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        {
            label: '/items/armor', value: [
                {name: "armor", href: '#', icon: cover, class: 'opacity-60'},
                {name: "armor", href: '#', icon: cover, class: 'opacity-60'},
                {name: "armor", href: '#', icon: cover, class: 'opacity-60'},
                {name: "armor", href: '#', icon: cover, class: 'opacity-60'},
                {name: "armor", href: '#', icon: cover, class: 'opacity-60'},
                {name: "armor", href: '#', icon: cover, class: 'opacity-60'},
                {name: "armor", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        {
            label: '/items/misc', value: [
                {name: "misc", href: '#', icon: cover, class: 'opacity-60'},
                {name: "misc", href: '#', icon: cover, class: 'opacity-60'},
                {name: "misc", href: '#', icon: cover, class: 'opacity-60'},
                {name: "misc", href: '#', icon: cover, class: 'opacity-60'},
                {name: "misc", href: '#', icon: cover, class: 'opacity-60'},
                {name: "misc", href: '#', icon: cover, class: 'opacity-60'},
                {name: "misc", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },


        /*PROFILE*/


        {
            label: '/profile', value: [
                {name: "profile", href: '#', icon: cover, class: 'opacity-60'},
                {name: "profile", href: '#', icon: cover, class: 'opacity-60'},
                {name: "special", href: '/profile/special', icon: special, class: 'p-1 grayscale-50'},
                {name: "status", href: '/profile/status', icon: status, class: 'p-0.5 grayscale-50'},
                {name: "details", href: '/profile/details', icon: details, class: 'p-1 grayscale-50'},
                {name: "profile", href: '#', icon: cover, class: 'opacity-60'},
                {name: "profile", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        {
            label: '/profile/status', value: [
                {name: "status", href: '#', icon: cover, class: 'opacity-60'},
                {name: "status", href: '#', icon: cover, class: 'opacity-60'},
                {name: "status", href: '#', icon: cover, class: 'opacity-60'},
                {name: "status", href: '#', icon: cover, class: 'opacity-60'},
                {name: "status", href: '#', icon: cover, class: 'opacity-60'},
                {name: "status", href: '#', icon: cover, class: 'opacity-60'},
                {name: "status", href: '#', icon: cover, class: 'opacity-60'},
            ]
        },
        {
            label: '/profile/special', value: [
                {name: "strength", href: 'strength', icon: strength, isAlt: true},
                {name: "perception", href: 'perception', icon: perception, isAlt: true},
                {name: "endurance", href: 'endurance', icon: endurance, isAlt: true},
                {name: "charisma", href: 'charisma', icon: charisma, isAlt: true},
                {name: "intelligence", href: 'intelligence', icon: intelligence, isAlt: true},
                {name: "agility", href: 'agility', icon: agility, isAlt: true},
                {name: "luck", href: 'luck', icon: luck, isAlt: true},
            ]
        },
        {
            label: '/profile/details', value: [
                {name: "details", href: '#', icon: cover, class: 'opacity-60'},
                {name: "details", href: '#', icon: cover, class: 'opacity-60'},
                {name: "details", href: '#', icon: cover, class: 'opacity-60'},
                {name: "details", href: '#', icon: cover, class: 'opacity-60'},
                {name: "details", href: '#', icon: cover, class: 'opacity-60'},
                {name: "details", href: '#', icon: cover, class: 'opacity-60'},
                {name: "details", href: '#', icon: cover, class: 'opacity-60'},
            ]
        }
    ],
})

