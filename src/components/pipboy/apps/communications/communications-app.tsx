import {Component, createMemo, createSignal, Show} from "solid-js";
import left from "~/static/app/icons/bottom_bar/apple-app-alt-26.png"
import right from "~/static/app/icons/bottom_bar/apple-app-alt-26.png"
import call from "~/static/app/icons/bottom_bar/apple-app-alt-3.png"
import mail from "~/static/app/icons/bottom_bar/apple-app-alt-28.png"
import contacts from "~/static/app/icons/bottom_bar/apple-app-alt-25.png"
import BottomPipboyMenu, {MenuItem} from "~/components/pipboy/footer/bottom-pipboy-menu";
import {ContactList} from "~/components/lists/contact-list";
import ScreenLayout from "~/components/layouts/screen/screen-layout";
import {companions} from "~/lib/companions";
// import pipboyTop from "~/static/pipboy/assets/ui/pipboy_top.png"
// import pipboyLeft from "~/static/pipboy/assets/ui/pipboy_left.png"
// import pipboyRight from "~/static/pipboy/assets/ui/pipboy_right.png"
// import pipboyBottom from "~/static/pipboy/assets/ui/pipboy_bottom.png"
type PROPS = {
    data: any
    onClick?: (data: any) => any
}


const CommunicationsApp: Component<PROPS> = props => {


    const [getComm, setComm] = createSignal("contacts")


    const menuItems: MenuItem[] = [
        {name: "right", icon: right},
        {name: "mail", icon: mail},
        {name: "contacts", icon: contacts},
        {name: "call", icon: call},
        {name: "left", icon: left},
    ]


    const handleCommunications = (app: string) => {
        console.log(app)
        setComm(app)
    }

    const communications = createMemo(() => getComm())


    return (

        <div
            class={"flex justify-center items-center absolute inset-x-0 top-12 h-[80dvh] w-screen sm:max-w-xs bottom-20"}>


            <Show when={getComm() === "contacts"}>
                <div class={"flex flex-col justify-center items-center h-[80dvh] w-[80%]"}>

                    <ScreenLayout height={"78dvh"}>

                        <ContactList onClick={props.onClick} height={"78dvh"} list={companions}/>

                    </ScreenLayout>
                </div>
            </Show>

            <BottomPipboyMenu menuItems={menuItems} onClick={handleCommunications} appName={communications()}/>

        </div>
    );
};

export default CommunicationsApp;
