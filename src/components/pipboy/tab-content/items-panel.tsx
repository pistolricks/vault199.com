import fullstack_vault_boy_gif from "~/static/gifs/fullstack_vault_boy.gif";
import vaultBoyGif from "~/static/gifs/vaultboy.gif";
import teamplayer_gif from "~/static/gifs/teamplayer.gif";
import handyman_gif from "~/static/gifs/handyman.gif";
import nerd_gif from "~/static/gifs/nerd.gif";
import entertainer_gif from "~/static/gifs/entertainer.gif";


import { soundTypes } from "~/lib/sounds";
import {Component, createEffect, createMemo, createSignal} from "solid-js";
import { Tabs } from "@ark-ui/solid";




const VaultBoyGif = () => (
    <div
        class="vboy"
        style={{
            margin: "0 auto",
            'margin-left': '120',
            background: `url(${vaultBoyGif})`,
            'background-size': "contain",
            'background-repeat': "no-repeat",
        }}
    ></div>
);

const FullStackGif = () => (
    <div
        class="vboy"
        style={{
            margin: "0 auto",
            'margin-left': '80px',
            background: `url(${fullstack_vault_boy_gif})`,
            'background-size': "contain",
            'background-repeat': "no-repeat",
        }}
    ></div>
);

const TeamPlayerGif = () => (
    <div
        class="vboy"
        style={{
            margin: "0 auto",
            'margin-top': '-40px',
            'margin-bottom': '-40px',
            'margin-left': '70px',
            height: '240px',
            background: `url(${teamplayer_gif})`,
            'background-size': "contain",
            'background-repeat': "no-repeat",
        }}
    ></div>
);

const EntertainerGif = () => (
    <div
        class="vboy"
        style={{
            margin: "0 auto",
            'margin-left': '60px',
            background: `url(${entertainer_gif})`,
            'background-size': "contain",
            'background-repeat': "no-repeat",
        }}
    ></div>
);

const NerdGif = () => (
    <div
        class="vboy"
        style={{
            margin: "0 auto",
            'margin-top': '-20px',
            'margin-bottom': '-40px',
            'margin-left': '60px',
            height: '220px',
            background: `url(${nerd_gif})`,
            'background-size': "contain",
            'background-repeat': "no-repeat",
        }}
    ></div>
);

const HandymanGif = () => (
    <div
        class="vboy"
        style={{
            margin: "0 auto",
            'margin-left': '60px',
            background: `url(${handyman_gif})`,
            'background-size': "contain",
            'background-repeat': "no-repeat",
        }}
    ></div>
);

const FullStackInfo = () => (
    <div>
        <ul class="info-table">
            <li class="vboy-wrap"></li>
            <li class="clear">
        <span class="fade-a">
          <b>Indie Hacks</b> 4
        </span>
                <span class="fade-b">
          <b>Ideas</b>
          72
        </span>
            </li>
            <li>
                <b>Connections</b> 38
            </li>
            <li>
                <b>VAL</b> 2528
            </li>
            <li>
                <b>CND</b>{" "}
                <span class="condition">
          <span class="fill" style="width: 88%;"></span>
        </span>
            </li>
            <li class="span-2">Caffeine Lvls: Over 9000</li>
        </ul>
        <p class="extra" style={{ 'padding-left': 0, 'overflow-y': "auto", 'overflow-x': "hidden", height: '100px' }}>
            The mastermind behind lemonade stands in the digital age. I turn caffeine
            into companies and ideas into apps that might just take over the world...
            or at least make it more interesting
        </p>
    </div>
);

const TeamPlayerInfo = () => (
    <div>
        <ul class="info-table">
            <li class="vboy-wrap"></li>
            <li class="clear">
        <span class="fade-a">
          <b>Team Wins</b> 27
        </span>
                <span class="fade-b">
          <b>Group Eats</b>52
        </span>
            </li>
            <li>
                <b>High Fives</b> 345
            </li>
            <li>
                <b>Conflicts</b> 0
            </li>
            <li>
                <b>CND</b>{" "}
                <span class="condition">
          <span class="fill" style="width: 98%;"></span>
        </span>
            </li>
            <li class="span-2">Morale 💯</li>
        </ul>
        <p class="extra" style={{ 'padding-left': 0, 'overflow-y': "auto", 'overflow-x': "hidden", height: '100px' }}>
            I play well with others, especially when there’s pizza involved. I bring
            teams together faster than a Wi-Fi connection, making sure every project
            is a ‘high-five’ moment.
        </p>
    </div>
);

const EntertainerInfo = () => (
    <div>
        <ul class="info-table">
            <li class="vboy-wrap"></li>
            <li class="clear">
        <span class="fade-a">
          <b>Indie Hacks</b> 4
        </span>
                <span class="fade-b">
          <b>Ideas</b>
          72
        </span>
            </li>
            <li>
                <b>Connections</b> 38
            </li>
            <li>
                <b>VAL</b> 2528
            </li>
            <li>
                <b>CND</b>{" "}
                <span class="condition">
          <span class="fill" style="width: 88%;"></span>
        </span>
            </li>
            <li class="span-2">Fans: 1 (Hi Mom!)</li>
        </ul>
        <p class="extra" style={{ 'padding-left': 0, 'overflow-y': "auto", 'overflow-x': "hidden", height: '100px' }}>
            Putting the 'pro' in procrastination by crafting stories and experiences
            that actually make you want to finish your work early. My content’s so
            engaging, even my mom shares it.
        </p>
    </div>
);

const NerdInfo = () => (
    <div>
        <ul class="info-table">
            <li class="vboy-wrap"></li>
            <li class="clear">
                <b>Tomes Read</b> 137
            </li>
            <li>
                <b>Code Langs</b> 6
            </li>
            <li>
                <b>Gadgets</b> 11
            </li>
            <li>
                <b>CND</b>{" "}
                <span class="condition">
          <span class="fill" style="width: 88%;"></span>
        </span>
            </li>
            <li class="span-2">Trivia Wins: 94%</li>
        </ul>
        <p class="extra" style={{ 'padding-left': 0, 'overflow-y': "auto", 'overflow-x': "hidden", height: '100px' }}>
            The guru of geekery, with more books than friends and more curiosity than
            a cat. I dive into code like it’s a ball pit and come out with digital
            magic (and sometimes just more questions).
        </p>
    </div>
);



const ItemsPanel: Component<{
    profiles: any;
}> = (props) => {

    const profiles = () => props.profiles;

    const [getProfile, setProfile] = createSignal(profiles().vaultboy);
    const [isPlaying, setPlaying] = createSignal(false);


    const activeProfile = createMemo(() => getProfile())
    const playOrStopGame = () => {
        if (isPlaying) {
            setPlaying(false);
        } else {
            setPlaying(true);
        }
    };

    createEffect(() => {
        console.log(isPlaying())
    })

    return (
        <div
            class="tab-pane fade show active"
            role="tabpanel"
            id="items"
            aria-labelledby="items-tab"
        >
            <ul class="pip-head">
                <li>
                    <b>Wg</b> 34/125
                </li>
                <li>
                    <b>HP</b> 89/110
                </li>
                <li>
          <span class="fade-a">
            <b>DT</b> 21
          </span>
                    <span class="fade-b">
            <b>DR</b> 11
          </span>
                </li>
                <li>
                    <b>Caps</b> 1721
                </li>
            </ul>

            <div class="pip-body mt-24 sm:mt-4">
                <ul class="options" style={{ display: isPlaying() ? "none" : "block" }}>
                    <li>
                        <input
                            type="radio"
                            id="radio1"
                            name="radio"
                            onChange={() => setProfile(profiles().fullstack)}
                            data-play-sound={soundTypes.slide_click}
                        />
                        <label for="radio1">Entrepreneur</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="radio2"
                            name="radio"
                            onChange={() => setProfile(profiles().entertainer)}
                            data-play-sound={soundTypes.slide_click}
                        />
                        <label for="radio2">Entertainer</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="radio3"
                            name="radio"
                            onChange={() => setProfile(profiles().teamplayer)}
                            data-play-sound={soundTypes.slide_click}
                        />
                        <label for="radio3">Team Player</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="radio4"
                            name="radio"
                            onChange={() => setProfile(profiles().handyman)}
                            data-play-sound={soundTypes.slide_click}
                        />
                        <label for="radio4">Problem Solver</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="radio5"
                            name="radio"
                            onClick={() => setProfile(profiles().nerd)}
                            data-play-sound={soundTypes.slide_click}
                        />
                        <label for="radio5">Nerd</label>
                    </li>
                </ul>
                <div class="info">
                    <div
                        class="info-body"
                        style={{
                            display: isPlaying() ? "none" : "block",
                        }}
                    >

                        {
                            {
                                [profiles().fullstack]: <FullStackGif />,
                                [profiles().entertainer]: <EntertainerGif />,
                                [profiles().teamplayer]: <TeamPlayerGif />,
                                [profiles().handyman]: <HandymanGif />,
                                [profiles().nerd]: <NerdGif />,
                                [profiles().vaultboy]: <VaultBoyGif />,
                            }[activeProfile()]
                        }

                        {
                            {
                                [profiles().fullstack]: <FullStackInfo />,
                                [profiles().entertainer]: <EntertainerInfo />,
                                [profiles().teamplayer]: <TeamPlayerInfo />,
                                [profiles().nerd]: <NerdInfo />,
                                [profiles().vaultboy]: <p>Please select a profile</p>,
                            }[activeProfile()]
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ItemsPanel;
