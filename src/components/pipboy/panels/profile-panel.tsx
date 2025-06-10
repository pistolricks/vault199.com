import {Component, createEffect} from "solid-js";
import {classNames} from "~/components/navigation";
import vaultBoyGif from "~/static/gifs/vaultboy.gif";
import {getConfigByField, getInitialCharacter, ICharacter} from "~/components/character/config";
import CharacterStats from "~/components/character/character-stats";

type PROPS = {
    character: ICharacter
}


const ProfilePanel: Component<PROPS> = props => {

    let title: HTMLElement;
    let stimpack: HTMLDivElement;


    const character = () => props.character;


    return (
        <div class={"relative w-full h-[90%]"}>
            <CharacterStats init={2} cnd={4} {...character()}
                            class={"absolute top-9 px-1 w-full flex justify-center items-center"}/>
            <div class={"absolute top-10 sm:top-0 h-full w-full flex justify-center items-center"}>
                {/*
                <VaultBoy class={"w-[30%] sm:w-[20%] h-[60%]"}/>
                */}
            </div>


        </div>

    )


};

export default ProfilePanel;


const VaultBoy: Component<{
    class?: string;
}> = (props) => {
    const className = () => props.class;
    return (
        <div
            class={classNames(
                "vboy",
                className()
            )}
            style={{
                background: `url(${vaultBoyGif})`,
                'background-size': "contain",
                'background-repeat': "no-repeat",
            }}
        ></div>
    )
};

const FooterData: Component<{
    class?: string;
}> = (props) => {
    const className = () => props.class;

    return (
        <div class={className()}>
            <div class={"flex flex-col"}>
                <p class="extra"
                   style={{'padding-left': 0, 'overflow-y': "auto", 'overflow-x': "hidden", height: '100px'}}>

                </p>
            </div>
        </div>
    );
}


