import {Component} from "solid-js";
import AiCompanion from "~/components/ai-companion";


type PROPS = {
    name: string
}


const CompanionApp: Component<PROPS> = props => {

    const name = () => props.name ?? "mrhandy";


    return (
        <div>
            <AiCompanion name={name()}/>
        </div>
    );
};

export default CompanionApp;
