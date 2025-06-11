import {createListCollection} from '@ark-ui/solid/collection'
import contacts from "~/static/app/icons/ui/contacts.png";
import video from "~/static/app/icons/color/TV.png"
import map from "~/static/app/icons/fallout/map.png";
import camera from "~/static/app/icons/color/Camera.png";
import media from "~/static/app/icons/color/News.png";
import gallery from "~/static/app/icons/color/Instagram.png";
import cover from "~/static/pipboy/2000N/app_cover.png";
import bio from "~/static/app/icons/color/Notes.png"
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
        /*Index*/
        {
            label: '/', value: [
                {name: "home", href: '#', icon: cover},
                {name: "home", href: '#', icon: cover},
                {name: "home", href: '#', icon: cover},
                {name: "home", href: '#', icon: cover},
                {name: "home", href: '#', icon: cover},
                {name: "home", href: '#', icon: cover},
                {name: "home", href: '#', icon: cover},
            ]
        },
        /*DASHBOARD*/
        {
            label: '/dashboard', value: [
                {name: "dashboard", href: '#', icon: cover},
                {name: "dashboard", href: '#', icon: cover},
                {name: "dashboard", href: '#', icon: cover},
                {name: "dashboard", href: '#', icon: cover},
                {name: "dashboard", href: '#', icon: cover},
                {name: "dashboard", href: '#', icon: cover},
                {name: "dashboard", href: '#', icon: cover},
            ]
        },
        /*LOGIN*/
        {
            label: '/login', value: [
                {name: "login", href: '#', icon: cover},
                {name: "login", href: '#', icon: cover},
                {name: "login", href: '#', icon: cover},
                {name: "login", href: '#', icon: cover},
                {name: "login", href: '#', icon: cover},
                {name: "login", href: '#', icon: cover},
                {name: "login", href: '#', icon: cover},
            ]
        },

        /*DATA*/

        {
            label: '/data', value: [
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
                {name: "data", href: '#', icon: cover},
            ]
        },
        {
          label: '/data/contacts', value: [
                {name: "contacts", href: '#', icon: cover},
                {name: "contacts", href: '#', icon: cover},
                {name: "contacts", href: '#', icon: cover},
                {name: "contacts", href: 'contacts', icon: contacts, isAlt: true},
                {name: "contacts", href: '#', icon: cover},
                {name: "contacts", href: '#', icon: cover},
                {name: "contacts", href: '#', icon: cover},
            ]
        },
        {
            label: '/data/map', value: [
                {name: "map", href: '#', icon: cover},
                {name: "map", href: '#', icon: cover},
                {name: "map", href: '#', icon: cover},
                {name: "map", href: 'map', icon: map, isAlt: true},
                {name: "map", href: '#', icon: cover},
                {name: "map", href: '#', icon: cover},
                {name: "map", href: '#', icon: cover},
            ]
        },
        {
            label: '/data/media', value: [
                {name: "media", href: '#', icon: cover},
                {name: "media", href: '#', icon: cover},
                {name: "media", href: '#', icon: cover},
                {name: "audio", href: 'audio', icon: media, isAlt: false},
                {name: "camera", href: 'camera', icon: camera, isAlt: false},
                {name: "gallery", href: 'gallery', icon: gallery, isAlt: true},
                {name: "video", href: 'video', icon: video, isAlt: true},

            ]
        },


       /*ITEMS*/


        {
            label: '/items', value: [
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
                {name: "items", href: '#', icon: cover},
            ]
        },
        {
            label: '/items/weapons', value: [
                {name: "weapons", href: '#', icon: cover},
                {name: "weapons", href: '#', icon: cover},
                {name: "weapons", href: '#', icon: cover},
                {name: "weapons", href: '#', icon: cover},
                {name: "weapons", href: '#', icon: cover},
                {name: "weapons", href: '#', icon: cover},
                {name: "weapons", href: '#', icon: cover},
            ]
        },
        {
            label: '/items/armor', value: [
                {name: "armor", href: '#', icon: cover},
                {name: "armor", href: '#', icon: cover},
                {name: "armor", href: '#', icon: cover},
                {name: "armor", href: '#', icon: cover},
                {name: "armor", href: '#', icon: cover},
                {name: "armor", href: '#', icon: cover},
                {name: "armor", href: '#', icon: cover},
            ]
        },
        {
            label: '/items/misc', value: [
                {name: "misc", href: '#', icon: cover},
                {name: "misc", href: '#', icon: cover},
                {name: "misc", href: '#', icon: cover},
                {name: "misc", href: '#', icon: cover},
                {name: "misc", href: '#', icon: cover},
                {name: "misc", href: '#', icon: cover},
                {name: "misc", href: '#', icon: cover},
            ]
        },


        /*PROFILE*/


        {
            label: '/profile', value: [
                {name: "profile", href: '#', icon: cover},
                {name: "profile", href: '#', icon: cover},
                {name: "profile", href: '#', icon: cover},
                {name: "profile", href: '#', icon: cover},
                {name: "profile", href: '#', icon: cover},
                {name: "profile", href: '#', icon: cover},
                {name: "profile", href: '#', icon: cover},
            ]
        },
        {
            label: '/profile/status', value: [
                {name: "status", href: '#', icon: cover},
                {name: "status", href: '#', icon: cover},
                {name: "status", href: '#', icon: cover},
                {name: "status", href: '#', icon: cover},
                {name: "status", href: '#', icon: cover},
                {name: "status", href: '#', icon: cover},
                {name: "status", href: '#', icon: cover},
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
                {name: "details", href: '#', icon: cover},
                {name: "details", href: '#', icon: cover},
                {name: "details", href: '#', icon: cover},
                {name: "details", href: '#', icon: cover},
                {name: "details", href: '#', icon: cover},
                {name: "details", href: '#', icon: cover},
                {name: "details", href: '#', icon: cover},
            ]
        }
    ],
})

