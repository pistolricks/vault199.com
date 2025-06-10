import {Component, createEffect, createSignal, Match, Switch} from "solid-js";
import {classNames} from "~/components/navigation";
import HealthyBody from '~/static/app/svgs/health/body/1.svg?component-solid';

import BrokenLeftArm from '~/static/app/svgs/health/body/2.svg?component-solid';

import BrokenRightArm from '~/static/app/svgs/health/body/3.svg?component-solid';
import BrokenArms from '~/static/app/svgs/health/body/4.svg?component-solid';

import BrokenLeftLeg from '~/static/app/svgs/health/body/5.svg?component-solid';
import BrokenRightLeg from '~/static/app/svgs/health/body/9.svg?component-solid';
import BrokenLegs from '~/static/app/svgs/health/body/13.svg?component-solid';

import BrokenLeftSide from '~/static/app/svgs/health/body/6.svg?component-solid';
import BrokenLeftArmRightLeg from '~/static/app/svgs/health/body/10.svg?component-solid';


import BrokenRightSide from '~/static/app/svgs/health/body/11.svg?component-solid';
import BrokenRightArmLeftLeg from '~/static/app/svgs/health/body/7.svg?component-solid';

import BrokenArmsLeftLeg from '~/static/app/svgs/health/body/8.svg?component-solid';
import BrokenArmsRightLeg from '~/static/app/svgs/health/body/12.svg?component-solid';

import BrokenLegsLeftArm from '~/static/app/svgs/health/body/14.svg?component-solid';
import BrokenLegsRightArm from '~/static/app/svgs/health/body/15.svg?component-solid';

import BrokenArmsBrokenLegs from '~/static/app/svgs/health/body/16.svg?component-solid';

import HealthyHead from '~/static/app/svgs/health/head/1.svg?component-solid';
import CrippledHead from '~/static/app/svgs/health/head/5.svg?component-solid';
import {ILimbs} from "~/components/character/config";

const HealthBoy: Component<{
    limbs: ILimbs;
    class?: string;
}> = (props) => {
    const className = () => props.class;


    const isFine = {
        fine: 1,
        crippled: 0
    }

    const limbs = () => props.limbs;


    const [getHead, setHead] = createSignal<number>(isFine[limbs().head]);
    const [getLimbs, setLimbs] = createSignal<string>(`${isFine[limbs().handL]}${isFine[limbs().handR]}${isFine[limbs().legL]}${isFine[limbs().legR]}`);

    createEffect(() => {
        setHead(isFine[limbs().head])
        setLimbs(`${isFine[limbs().handL]}${isFine[limbs().handR]}${isFine[limbs().legL]}${isFine[limbs().legR]}`)
        console.log(getLimbs(), "limb health")
    })

    return (
        <div class={classNames(
            "flex flex-col items-center justify-center",
            className()
        )}>
            <div class={"w-full flex justify-center items-center"}>
                <Switch>
                    <Match when={getHead() === 1}>
                        <HealthyHead fill={'#00dd00'} width={125} height={125}/>
                    </Match>
                    <Match when={getHead() === 0}>
                        <CrippledHead fill={'#c72d04'} width={125} height={125}/>
                    </Match>
                </Switch>
            </div>
            <div class={"w-full flex justify-center items-center"}>
                <Switch>
                    <Match when={getLimbs() === '1111'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <HealthyBody fill={"#00dd00"} style={{
                                'margin-top': -30 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>
                    <Match when={getLimbs() === '0111'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenLeftArm fill={"#ff5c00"} style={{
                                'margin-top': -30 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>

                    <Match when={getLimbs() === '1011'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenRightArm fill={"#ff5c00"} style={{
                                'margin-top': -30 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>
                    <Match when={getLimbs() === '0011'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenArms fill={"#ff5c00"} style={{
                                'margin-top': -30 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>


                    <Match when={getLimbs() === '1101'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenLeftLeg fill={"#ff5c00"} style={{
                                'margin-top': -30 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>

                    <Match when={getLimbs() === '1110'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenRightLeg fill={"#ff5c00"} style={{
                                'margin-top': -30 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>

                    <Match when={getLimbs() === '1100'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenLegs fill={"#c72d04"} style={{
                                'margin-top': -35 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>

                    <Match when={getLimbs() === '0101'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenLeftSide fill={"#c72d04"} style={{
                                'margin-top': -22 + 'px',
                                'margin-left': 25 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>
                    <Match when={getLimbs() === '1010'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenRightSide fill={"#c72d04"} style={{
                                'margin-top': -30 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>
                    <Match when={getLimbs() === '0110'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenLeftArmRightLeg fill={"#c72d04"} style={{
                                'margin-top': -30 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>
                    <Match when={getLimbs() === '1001'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenRightArmLeftLeg fill={"#c72d04"} style={{
                                'margin-top': -25 + 'px',
                                'margin-left': 25 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>
                    <Match when={getLimbs() === '0001'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenArmsLeftLeg fill={"#c72d04"} style={{
                                'margin-top': -18 + 'px',
                                'margin-right': 4 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>
                    <Match when={getLimbs() === '0010'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenArmsRightLeg fill={"#c72d04"} style={{
                                'margin-top': -18 + 'px',
                                'margin-right': 4 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>
                    <Match when={getLimbs() === '0100'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenLegsLeftArm fill={"#c72d04"} style={{
                                'margin-top': -47 + 'px',
                                'margin-left': 20 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>
                    <Match when={getLimbs() === '1000'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenLegsRightArm fill={"#c72d04"} style={{
                                'margin-top': -45 + 'px',
                                'margin-left': 28 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>
                    <Match when={getLimbs() === '0000'}>
                        <div class={"w-full flex justify-center items-center"}>
                            <BrokenArmsBrokenLegs fill={"#c72d04"} style={{
                                'margin-top': -58 + 'px',
                                'margin-right': 2 + 'px',
                            }} width={"150"}/>
                        </div>
                    </Match>
                </Switch>
            </div>
        </div>

    )
};

export default HealthBoy;