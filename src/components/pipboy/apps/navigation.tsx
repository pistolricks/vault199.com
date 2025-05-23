import {Component} from "solid-js";
import map3 from "~/static/pipboy/assets/map/map3.png"
type PROPS = {

}

const Navigation: Component<PROPS> = props => {

    return (
        <img src={map3} class={'h-full w-screen object-cover'} alt={'map'}/>
    );
};

export default Navigation;