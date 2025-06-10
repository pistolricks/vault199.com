import {Component} from "solid-js";
import {ICharacter} from "~/components/character/config";

const CharacterStats: Component<ICharacter & { class?: string, init: number, cnd: number }> = (props) => {
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
            <div class={"w-full  flex flex-col"}>
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

export default CharacterStats;