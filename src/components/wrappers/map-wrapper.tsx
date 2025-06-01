import {Feature, Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {MapboxVectorLayer} from 'ol-mapbox-style';


import {Component, createEffect, createMemo, createSignal, JSX, onMount} from "solid-js";
import {useGeographic} from "ol/proj";
import {Point} from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {ActivatedLayoutRouteData} from "~/components/layouts/activated/activated-layout";


type PROPS = {
    data?: ActivatedLayoutRouteData

}



const styleJson = `https://api.maptiler.com/maps/01972bb3-925c-76b1-a282-45de8f142fbc/style.json?key=cqdV2IAoMQWG4iAF4GIx`;

const MapWrapper: Component<PROPS> = props => {

    //

    useGeographic();

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
            target: mapElement()!,
            view: new View({
                center: getPoint(),
                zoom: 8
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
             class={"bg-green-400/50"}
             style={{
            height: "84.6dvh"
        }} id="map"></div>
    );
};

export default MapWrapper;

