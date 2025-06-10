import {Component, For} from "solid-js";
import {ICharacter} from "~/components/character/config";

type PROPS = ICharacter;

const Profile: Component<PROPS> = props => {

    return (
        <div class={"border-b border-[rgb(var(--main))] py-2"}>
            <div>
                <ul class="info-table">
                    <li class="vboy-wrap"></li>
                    <li>
                        <b>Name</b>
                        {props.name}
                    </li>
                    <li class="clear">
                        <span class="fade-a">
                        <b>Origin</b>
                            {props.origin}
                        </span>
                        <span class="fade-b">
                           <b>Occupation</b>
                            {props.occupation}
                         </span>
                    </li>
                    <li>
                        <b>traits</b>
                        <For each={props.traits}>
                            {(item, i) => (
                                <span class={"pr-2 capitalize"}>{item}</span>
                            )}
                        </For>
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
                </ul>
                <p class="extra"
                   style={{'padding-left': 0, 'overflow-y': "auto", 'overflow-x': "hidden", height: '20dvh'}}>
                    {props.bio}
                </p>
            </div>

        </div>

    );
};

export default Profile;