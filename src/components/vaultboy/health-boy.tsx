import {Component} from "solid-js";
import {classNames} from "~/components/navigation";
import HealthyBody from '~/static/app/svgs/health/body/1.svg?component-solid';
import HealthyHead from '~/static/app/svgs/health/head/1.svg?component-solid';

const HealthBoy: Component<{
    class?: string;
}> = (props) => {
    const className = () => props.class;
    return (
        <div class={classNames(
            "flex flex-col items-center justify-center",
            className()
        )}>
            <div class={"w-full flex justify-center items-center"}>
                <HealthyHead fill={''} width={125} height={125}/>
            </div>
            <div class={"w-full flex justify-center items-center"}>
                <HealthyBody fill={""} style={{
                    'margin-top': -30 + 'px',
                }} width={"150"}/>
            </div>
        </div>
    )
};

export default HealthBoy;