import {Component, createMemo, createSignal, JSX} from "solid-js";
import AiCompanion from "~/components/ai-companion";
import bottomMenuRb from "~/static/pipboy/bottom/bottom_menu_rb.png"
import bottomMenu2 from "~/static/pipboy/bottom/bottom_menu_2.png"
import radio from "~/static/app/icons/fallout/radio.png"
import streaming from "~/static/app/icons/fallout/streaming.png"
import chat from "~/static/app/icons/bottom_bar/apple-app-alt-2.png"
import call from "~/static/app/icons/bottom_bar/apple-app-alt-3.png"
import vChat from "~/static/app/icons/bottom_bar/apple-app-alt-5.png"
import mail from "~/static/app/icons/bottom_bar/apple-app-alt-28.png"
import contacts from "~/static/app/icons/bottom_bar/apple-app-alt-25.png"
import distorted from "~/static/images/pipboyscanlines.png"
import {classNames} from "~/components/navigation";
import BottomPipboyMenu from "~/components/bottom-pipboy-menu";

type PROPS = {
    data: {
        name: string;
    };
}

const CommunicationsApp: Component<PROPS> = props => {

    const name = () => props.data?.name ?? "mrhandy";

    const [getComm, setComm] = createSignal("")

    const handleCommunications = (app: string) => {
        console.log(app)
        setComm(app)
    }

    const communications = createMemo(() => getComm())


    return (

        <div class={"flex justify-center items-center absolute inset-0 h-screen w-screen"}>
            <div class={"flex flex-col justify-center items-center "}>

                <AiCompanion name={name()}/>
            </div>


            <BottomPipboyMenu onClick={handleCommunications} appName={communications()}/>

        </div>
    );
};

export default CommunicationsApp;
