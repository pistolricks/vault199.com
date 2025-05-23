import {Component} from "solid-js";
import AiCompanion from "~/components/ai-companion";
import codsWorth from "~/static/app/Codsworth_model.webp"
type PROPS = {
    data: {
        name: string;
    };
}

const SatApp: Component<PROPS> = props => {

    const name = () => props.data?.name ?? "mrhandy";

    return (

        <div class={"flex justify-center items-center"}>
            <div class={"flex flex-col justify-center items-center "}>
            <img src={codsWorth} class={'h-[20dvg]  object-contain'} alt={""}/>
            <AiCompanion name={name()}/>
            </div>
        </div>



    );
};

export default SatApp;