import {Feature, Map, View} from 'ol';
import {MapboxVectorLayer} from 'ol-mapbox-style';
import {defaults as defaultControls} from 'ol/control/defaults.js';


import {Component, createEffect, createMemo, createSignal} from "solid-js";
import {useGeographic} from "ol/proj";
import {Point} from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {ActivatedLayoutRouteData} from "~/lib/types";

type PROPS = {
    data?: ActivatedLayoutRouteData;
    zoom: number;

}


const styleJson = `https://api.maptiler.com/maps/01972bb3-925c-76b1-a282-45de8f142fbc/style.json?key=cqdV2IAoMQWG4iAF4GIx`;

const MapWrapper: Component<PROPS> = props => {

    //

    useGeographic();

    const zoom = () => props.zoom;

    const [getCoords, setCoords] = createSignal<GeolocationCoordinates | undefined>(props.data?.coords);

    const coords = createMemo(() => getCoords())

    const [getPoint, setPoint] = createSignal<any>([coords()?.longitude, coords()?.latitude]);

    const current = createMemo(() => getPoint())

    const [getMapElement, setMapElement] = createSignal<HTMLDivElement | undefined>();

    const mapElement = createMemo(() => {
        return getMapElement()
    })


    createEffect(() => {


        setPoint([coords()?.longitude, coords()?.latitude]);

        console.log("point", current())

        const place = new Point(current());


        const map = new Map({
            controls: defaultControls({
                zoom: false,
            }),

            target: mapElement()!,
            view: new View({
                center: getPoint(),
                zoom: 14
            }),
            layers: [
                new MapboxVectorLayer({
                    styleUrl: styleJson,

                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [new Feature(place)],
                    }),
                    style: {
                        'circle-radius': 9,
                        'circle-fill-color': 'red',
                    },
                }),
            ],
        });

    })

    return (
        <div ref={setMapElement}
             class={"border-2 border-black"}
             style={{
                 height: "85.58dvh"
             }} id="map"></div>
    );
};

export default MapWrapper;

