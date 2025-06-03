import {Component, createEffect} from "solid-js";
import {classNames} from "~/components/navigation";
import vaultBoyGif from "~/static/pipboy/assets/pipboy_statusboy.png";
import {getConfigByField, getInitialCharacter, ICharacter} from "~/components/character/config";

type PROPS = {}


const StatusPanel: Component<PROPS> = props => {

    let title: HTMLElement;
    let stimpack: HTMLDivElement;


    createEffect(() => {
        console.log("initial", getInitialCharacter());
        console.log("field", getConfigByField("endurance"));
    })


    return (


        <div class={"relative w-full h-[90%]"}>

            <div class={"absolute top-10 bottom-0 h-full w-full flex justify-center items-center"}>
                <HealthBoy class={"w-[90%] h-[90%]"}/>
            </div>
            <StatsData init={2} cnd={4} { ...getInitialCharacter()} class={"absolute bottom-0 px-1 w-full flex justify-center items-center"}/>

        </div>


    );
};

export default StatusPanel;


const HealthBoy: Component<{
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

const StatsData: Component<ICharacter & { class?: string, init: number, cnd: number }> = (props) => {
    const className = () => props.class;

    const att = () => props.stats?.meleeDamage ?? 0;
    const def = () => props.stats?.healthPoints ?? 0;
    const init = () => props.init ?? 0;
    const wg = () => props.stats?.carryWeight ?? 0;
    const inv = () => props.inventory;
    const cnd = () => props.cnd;
    const exp = () => props.stats?.exp ?? 0;



    return (
        <div class={className()}>
            <div class={"w-full sm:w-3/5 flex flex-col"}>

                <ul class="info-table grid grid-cols-3 gap-1 uppercase">
                    <li class="clear">
                        <b>att</b>
                        {att()}
                    </li>
                    <li>
                        <b>def</b>
                        {def()}
                    </li>
                    <li>
                        <b>init</b>
                        {init()}
                    </li>
                    <li class="clear">
                        <span class="fade-a">
                        <b>wg</b>
                            {wg()}
                        </span>
                        <span class="fade-b">
                      <b>wg</b>
                            {wg()}
                        </span>
                    </li>
                    <li class="clear">
                        <b>arm</b>{" "}
                        <span class="condition">
                         <span class="fill" style={{
                             width: cnd() + "px"
                         }}></span>
                       </span>
                    </li>
                    <li>
                        <b>exp</b>
                        {exp()}
                    </li>
                </ul>
            </div>
        </div>
    );
}

const FooterData: Component<{
    class?: string;
}> = (props) => {
    const className = () => props.class;

    return (
        <div class={className()}>
            <div class={"flex flex-col"}>
                <p class="extra"
                   style={{'padding-left': 0, 'overflow-y': "auto", 'overflow-x': "hidden", height: '100px'}}>
                    When the bombs were falling, you or your predecessors were lucky enough to be safely secured in one
                    of the one hundred and twenty-two Vault-Tec facilities, deep underground protected by thick blast
                    doors and layers of rock and concrete. Your family either had enough money to buy their space or
                    were randomly selected to enter the vault to be saved from the nuclear devastation above—perhaps
                    only to be condemned to immoral experiments run by Vault-Tec on unwitting participants. You are free
                    from mutation and disease. The Vault-Tec program has afforded you a safe home for some time, but not
                    without some cost. The vault you came from used you as a human test subject, manipulating your
                    understanding of the world and your behavior in order to study you. That’s left you with a profound
                    psychological change, compared to the survivors on the surface you now know, and affects how you
                    make your way through the wasteland. Whether through design or poor planning, many of the vaults
                    were not well stocked or prepared for the long wait until nuclear fallout had reached safe levels
                    outside, and many fell into disrepair or out of supplies. Due to these shortcomings, many vault
                    dwellers sought help from the surface, and many vaults opened in order to allow supplies to reach
                    them. By opening their vault doors, the isolated societies inside opened themselves up to mixing
                    with the survivors above, and established a permanent connection with the surface—the most notable
                    example being the residents of Vault 15, who split up and went on to establish the settlement Shady
                    Sands, as well as the raiding gangs of the Jackals, Vipers, and Khans when their vault opened.
                </p>
            </div>
        </div>
    );
}


