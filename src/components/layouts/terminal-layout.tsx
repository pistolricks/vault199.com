import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import TerminalHeader from "~/components/layouts/terminal-header";
import TerminalNavigation from "~/components/layouts/terminal-navigation";


const TerminalLayout: Component<RouteSectionProps> = props => {

    return (
        <>
            <div class="overlay"></div>
            <div class="scanline"></div>
            <div class="wrapper">
                <div class="content clearfix">

                    <TerminalHeader {...props}/>
                    <TerminalNavigation {...props}/>

                    {props.children}


                </div>
            </div>
        </>
    );
}

export default TerminalLayout;