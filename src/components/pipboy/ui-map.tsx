import {Component} from "solid-js";

type PROPS = {

}

const UiMap: Component<PROPS> = props => {

    return (
        <section class="core-display" id="map-section">
            <div class="menu-container map-container">
                <img src="img/idf_map.png"
                     id="idf-map"
                     alt="a map of Ile-de-France french region"/>
            </div>
        </section>
    );
};

export default UiMap;