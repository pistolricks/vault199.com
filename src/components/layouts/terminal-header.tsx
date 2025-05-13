import {Component} from "solid-js";
import {RouteSectionProps} from "@solidjs/router";
import Logo from "~/static/images/vault-tec.png"


const TerminalHeader: Component<RouteSectionProps> = props => {



    return (
        <header class="site clearfix">
            <div class="col one">
                <img src={Logo} alt="Vault-Tec" width="740" height="729" id="logo-v" />
            </div>
            <div class="col two">
                <h4>ROBCO INDUSTRIES (tm) <br /> <b>U</b>nified <b>O</b>perating <b>S</b>ystem</h4>
                <p>----------------------------------------</p>
                <p>v 1.0.0</p>
                <p>(c)2075 - 2077 ROBCO INDUSTRIES</p>
                <p>- Server 199 -</p>
            </div>
        </header>
    );
};

export default TerminalHeader;