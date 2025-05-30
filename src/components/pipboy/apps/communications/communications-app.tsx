import {Component, createMemo, createSignal, Show} from "solid-js";
import chat from "~/static/app/icons/bottom_bar/apple-app-alt-2.png"
import call from "~/static/app/icons/bottom_bar/apple-app-alt-3.png"
import vChat from "~/static/app/icons/bottom_bar/apple-app-alt-5.png"
import mail from "~/static/app/icons/bottom_bar/apple-app-alt-28.png"
import contacts from "~/static/app/icons/bottom_bar/apple-app-alt-25.png"
import BottomPipboyMenu, {MenuItem} from "~/components/bottom-pipboy-menu";
import butchAvatar from "~/static/companions/butch/butch.webp"
import charonAvatar from "~/static/companions/charon/charon.webp"
import crossAvatar from "~/static/companions/cross/cross.webp"
import dogmeatAvatar from "~/static/companions/dogmeat/dogmeat.webp"
import fawkesAvatar from "~/static/companions/fawkes/fawkes.webp"
import jerichoAvatar from "~/static/companions/jericho/jericho.webp"
import sergeantAvatar from "~/static/companions/sergeant/sergeant.webp"
import cloverAvatar from "~/static/companions/clover/clover.webp"
import {Contact, ContactList} from "~/components/lists/contact-list";
import ScreenLayout from "~/components/layouts/screen/screen-layout";
// import pipboyTop from "~/static/pipboy/assets/ui/pipboy_top.png"
// import pipboyLeft from "~/static/pipboy/assets/ui/pipboy_left.png"
// import pipboyRight from "~/static/pipboy/assets/ui/pipboy_right.png"
// import pipboyBottom from "~/static/pipboy/assets/ui/pipboy_bottom.png"
type PROPS = {
    data: any
}

const companions: Contact[] = [
    {
        id: 301,
        name: "Cross",
        title: "cross",
        username: "@StarCrossed",
        avatar: crossAvatar,
        email: "cross@bos.com",
        phone: "g+77643449779555",
        bio: "Being the second highest-ranked soldier in the Brotherhood (behind Sentinel Sarah Lyons), Cross answers only to the elder, who has given her leave to pursue Project Purity's restoration as she sees fit.[5] Naturally, this means crushing the Enclave and fulfilling James' mission of purifying the wasteland's water and making it safe to drink.[",
        active: false
    },
    {
        id: 302,
        name: "Butch Deloria",
        title: "butch",
        username: "@OriginalSnake",
        avatar: butchAvatar,
        email: "butch@tunnelsnakes.com",
        phone: "n+5971158",
        bio: "Born and raised in Vault 101 all his life and being under the care of his mother Ellen, a notorious alcoholic who neglected to oversee her son's negative maturing,[Non-game 1] Butch has been forced to put on a mask as a boorish, overbearing bully to cover up his deep-seated feelings of inadequacy due to not knowing his father despite living in a Vault with a close-knit community.",
        active: true
    },
    {
        id: 303,
        name: "Clover",
        title: "clover",
        username: "@CloverDoll",
        avatar: cloverAvatar,
        email: "lucky@paradisefalls.com",
        phone: "e+6446475",
        bio: "Originally captured a few months ago prior to the Lone Wanderer leaving Vault 101 in 2277, Clover and her fellow slave Crimson were systematically broken mentally by the torture and abuse perpetrated by the slavers of Paradise Falls until they became obedient to their captors. Eulogy Jones himself claimed both as his personal slaves, using them for sex, personal protection, and as stress relief while continuing to abuse them to no end.[Non-game 1] Unlike Crimson, who managed to retain some of her will despite the slavers' torture, Clover succumbed to her conditioning, and as a result, her original personality was replaced by one of blind devotion and love to Eulogy (or whoever happens to own her). She willfully kills for, sleeps with, and does everything else she's ordered to do by her owner.[1]",
        active: false
    },
    {
        id: 304,
        name: "Sergeant RL-3",
        title: "sergeant",
        username: "@Sarge",
        avatar: sergeantAvatar,
        email: "sarge@getgutsy.com",
        phone: "n+5655555",
        bio: "A Mister Gutsy, a combat-ready spin-off model from the domestic Mister Handy model, that was created by General Atomics in the pre-War era[1] for use in mobile assault tactics on American battlefields. Following the nuclear apocalypse, \"Sergeant\" RL-3 survived mostly intact but rendered inactive. Sometime prior to the Lone Wanderer leaving Vault 101 in 2277, the Gutsy was found by Tinker Joe, who scavenged parts for customized repairs to bring \"Sarge\" back to full function in order to sell him as a bodyguard to anyone who was interested.",
        active: false
    },
    {
        id: 305,
        name: "Jericho",
        title: "jericho",
        username: "@JerichoTheDog",
        avatar: jerichoAvatar,
        email: "jericho@raiders.com",
        phone: "e+116122376",
        bio: "In his past, Jericho was a ruthless and deadly raider, killing and stealing for measly amounts of caps and loot for even the slightest of reasons. After fighting along with other raider gangs for many years and becoming a crack shot with a rifle, Jericho saw fit to \"retire\" and settled down in Megaton to enjoy his twilight years. Despite being out of the game for a long time, he has not lose touch with his raider ways. While the smug-lipped, foul-mouth Jericho will lend his marksmanship to protect the town, he more often than not prefers to guzzle booze and spew curses at passersby completely care-free. Rumors are abound that he also occasionally does some odd jobs for Colin Moriarty",
        active: false
    },
    {
        id: 306,
        name: "Fawkes",
        title: "fawkes",
        username: "@MutantLivesMatter",
        avatar: fawkesAvatar,
        email: "fawkes@remembernovember.com",
        phone: "g+9385355",
        bio: "An anomaly even among his brethren, whereas the majority of mutants found in the former capital city are aggressive, barely intelligent brutes, the one named \"Fawkes\" proves to be an educated, soft-spoken person that keeps his violent impulses in check. One of the original dwellers of Vault 87, Fawkes says he can still remember glimpses of his past, of the Vault in its prime, with scientists and regular dwellers walking through the halls. However, these glimpses are all that remains, and the inability to recall his former human identity torments him to no end.",
        active: false
    },
    {
        id: 307,
        name: "Dogmeat",
        title: "dogmeat",
        username: "@Woof",
        avatar: dogmeatAvatar,
        email: "woof@dogmeat.com",
        phone: "n+7876283",
        bio: "A short time before the Lone Wanderer left Vault 101 in 2277, Dogmeat and his previous owner were ambushed by raiders in the vicinity of a scrapyard, resulting in the latter's death while Dogmeat alone attempted to fend them off.",
        active: false
    },
    {
        id: 308,
        name: "Charon",
        title: "charon",
        username: "@WelcomeToHell",
        avatar: charonAvatar,
        email: "charon@ninthcircle.com",
        phone: "n+6753365",
        bio: "Very little of Charon's past before becoming the bouncer of the Ninth Circle in Underworld is revealed during the game. Ahzrukhal will tell the Lone Wanderer that Charon was raised by an unspecified group who brainwashed him into being completely loyal and obedient to whoever has his contract.[1] Despite the logical unfairness of their arrangement, Ahzrukhal will firmly state that Charon is not a slave, even implying that Charon did something in the past to deserve his \"employment\" with Ahzrukhal.[2] While the exact terms of the contract are never shown, if Charon is an active companion when looking for the G.E.C.K. in Vault 87, and one asks him to enter the irradiated chamber to retrieve it, he says that his contract only obligates him to provide combat services and that he is \"nobody's errand boy.\"",
        active: true
    },
]




const CommunicationsApp: Component<PROPS> = props => {


    const [getComm, setComm] = createSignal("")


    const menuItems: MenuItem[] = [
        {name: "vChat", icon: vChat},
        {name: "mail", icon: mail},
        {name: "contacts", icon: contacts},
        {name: "call", icon: call},
        {name: "chat", icon: chat},
    ]


    const handleCommunications = (app: string) => {
        console.log(app)
        setComm(app)
    }

    const communications = createMemo(() => getComm())


    return (

        <div class={"flex justify-center items-center absolute inset-x-0 top-10 h-[80dvh] w-screen sm:max-w-xs bottom-20"}>


            <Show when={getComm() === "contacts"}>
                <div class={"flex flex-col justify-center items-center overflow-y-auto h-[80dvh] w-[80%] duration-400 animate-in slide-in-from-bottom"}>

                    <ScreenLayout height={"70dvh"}>

                        <ContactList height={"70dvh"} list={companions}/>

                    </ScreenLayout>
                </div>
            </Show>

            <BottomPipboyMenu menuItems={menuItems} onClick={handleCommunications} appName={communications()}/>

        </div>
    );
};

export default CommunicationsApp;
